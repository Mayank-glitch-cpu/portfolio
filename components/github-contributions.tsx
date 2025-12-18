"use client"

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'

type ContributionDay = {
  date: string;
  count: number;
  level: number; // 0-4 for intensity
};

type ContributionWeek = ContributionDay[];

const GITHUB_USERNAME = 'Mayank-glitch-cpu';

// Generate available years (current year and past 4 years)
const getAvailableYears = () => {
  const currentYear = new Date().getFullYear();
  const years: string[] = [];
  for (let i = 0; i < 5; i++) {
    years.push((currentYear - i).toString());
  }
  return years;
};

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const availableYears = getAvailableYears();

  const fetchContributions = useCallback(async (year: string) => {
    try {
      setLoading(true);
      setError(null);

      // Using GitHub's GraphQL API proxy
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch contributions');
      }

      const data = await response.json();

      // Process the contributions data
      const contributionData: ContributionDay[] = data.contributions || [];

      // Create a map for quick lookup using the date string directly from API
      const contributionMap = new Map<string, { count: number; level: number }>();
      contributionData.forEach((day: { date: string; count: number; level: number }) => {
        contributionMap.set(day.date, { count: day.count, level: day.level });
      });

      // Generate all weeks for the entire year
      const yearNum = parseInt(year);

      // Helper to format date as YYYY-MM-DD without timezone issues
      const formatDate = (y: number, m: number, d: number): string => {
        return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      };

      // Get the day of week for Jan 1 (0 = Sunday)
      const jan1DayOfWeek = new Date(yearNum, 0, 1).getDay();

      // Calculate how many days to go back to get to the Sunday before Jan 1
      const daysBeforeJan1 = jan1DayOfWeek;

      // Get the day of week for Dec 31
      const dec31DayOfWeek = new Date(yearNum, 11, 31).getDay();

      // Calculate how many days after Dec 31 to complete the week
      const daysAfterDec31 = dec31DayOfWeek < 6 ? 6 - dec31DayOfWeek : 0;

      const weeks: ContributionWeek[] = [];

      // Start from the Sunday of the week containing Jan 1
      let currentDate = new Date(yearNum, 0, 1 - daysBeforeJan1);
      const endDate = new Date(yearNum, 11, 31 + daysAfterDec31);

      while (currentDate <= endDate) {
        const weekData: ContributionDay[] = [];

        for (let i = 0; i < 7; i++) {
          const y = currentDate.getFullYear();
          const m = currentDate.getMonth();
          const d = currentDate.getDate();
          const dateStr = formatDate(y, m, d);

          // Check if this date is within the selected year
          if (y === yearNum) {
            const contribution = contributionMap.get(dateStr);

            if (contribution) {
              weekData.push({
                date: dateStr,
                count: contribution.count,
                level: contribution.level
              });
            } else {
              // No data for this date - show as 0 contributions
              weekData.push({
                date: dateStr,
                count: 0,
                level: 0
              });
            }
          } else {
            // Date outside the selected year (padding)
            weekData.push({
              date: '',
              count: 0,
              level: -1
            });
          }

          currentDate.setDate(currentDate.getDate() + 1);
        }

        weeks.push(weekData);
      }

      setContributions(weeks);

      // Calculate total from the response
      const total = data.total?.[year] || contributionData.reduce((sum: number, day: { count: number }) => sum + day.count, 0);
      setTotalContributions(total);
    } catch (err) {
      console.error('Error fetching GitHub contributions:', err);
      setError('Unable to load contributions');
      generatePlaceholderData();
    } finally {
      setLoading(false);
    }
  }, []);

  const generatePlaceholderData = () => {
    const weeks: ContributionWeek[] = [];
    const today = new Date();

    for (let week = 0; week < 52; week++) {
      const weekData: ContributionDay[] = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(date.getDate() - (52 - week) * 7 - (6 - day));

        // Generate random contribution levels with some patterns
        const random = Math.random();
        let level = 0;
        let count = 0;

        if (random > 0.7) {
          level = Math.floor(Math.random() * 4) + 1;
          count = level * Math.floor(Math.random() * 5) + 1;
        }

        weekData.push({
          date: date.toISOString().split('T')[0],
          count,
          level
        });
      }
      weeks.push(weekData);
    }

    setContributions(weeks);
    setTotalContributions(weeks.flat().reduce((sum, day) => sum + day.count, 0));
  };

  useEffect(() => {
    fetchContributions(selectedYear);
  }, [fetchContributions, selectedYear]);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  const getLevelColor = (level: number) => {
    const colors = [
      'bg-muted/30 dark:bg-gray-800/50', // level 0
      'bg-green-200 dark:bg-green-900/60', // level 1
      'bg-green-400 dark:bg-green-700/80', // level 2
      'bg-green-500 dark:bg-green-600', // level 3
      'bg-green-600 dark:bg-green-500', // level 4
    ];
    return colors[level] || colors[0];
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Calculate month labels positions
  const getMonthLabels = () => {
    if (contributions.length === 0) return [];

    const labels: { month: string; position: number }[] = [];
    let lastMonth = -1;

    contributions.forEach((week, weekIndex) => {
      // Find the first valid day in the week (has a date string, level -1 is padding)
      const validDay = week.find(day => day.date !== '');
      if (validDay) {
        // Parse the date string directly to avoid timezone issues
        const dateParts = validDay.date.split('-');
        const month = parseInt(dateParts[1], 10) - 1; // Month is 0-indexed
        if (month !== lastMonth) {
          labels.push({ month: months[month], position: weekIndex });
          lastMonth = month;
        }
      }
    });

    return labels;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-foreground" />
              <h3 className="text-xl font-medium text-foreground">
                GitHub Contributions
              </h3>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              @{GITHUB_USERNAME}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Contribution Grid */}
          <div className="p-4 rounded-lg border border-border/30 bg-card/30 overflow-x-auto">
            <div className="flex gap-6">
              {/* Year Selector Dropdown */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md border border-border/50 bg-background hover:bg-muted/50 transition-colors text-sm font-medium"
                  >
                    {selectedYear}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-background border border-border/50 rounded-md shadow-lg z-20">
                      {availableYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => handleYearChange(year)}
                          className={`w-full px-3 py-2 text-left text-sm hover:bg-muted/50 transition-colors ${
                            year === selectedYear ? 'text-primary font-medium' : 'text-foreground'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contribution Stats */}
                <div className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{totalContributions.toLocaleString()}</span>
                  <br />
                  <span className="text-xs">contributions in {selectedYear}</span>
                </div>
              </div>

              {/* Grid Container */}
              {loading ? (
                <div className="flex items-center justify-center flex-1 h-32">
                  <div className="animate-pulse text-muted-foreground">Loading contributions...</div>
                </div>
              ) : (
                <div className="flex-1 overflow-x-auto">
                  {/* Month Labels - rendered inline with grid columns */}
                  <div className="flex mb-1">
                    {/* Spacer for day labels */}
                    <div className="w-8 flex-shrink-0"></div>
                    {/* Month labels positioned over their respective weeks */}
                    <div className="flex">
                      {contributions.map((_week, weekIndex) => {
                        const monthLabel = getMonthLabels().find(l => l.position === weekIndex);
                        return (
                          <div
                            key={weekIndex}
                            className="text-xs text-muted-foreground"
                            style={{ width: '15px' }}
                          >
                            {monthLabel ? monthLabel.month : ''}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="flex">
                    {/* Day Labels */}
                    <div className="flex flex-col gap-[3px] mr-1 text-xs text-muted-foreground w-7 flex-shrink-0">
                      <div className="h-[12px]"></div>
                      <div className="h-[12px] flex items-center text-[10px]">Mon</div>
                      <div className="h-[12px]"></div>
                      <div className="h-[12px] flex items-center text-[10px]">Wed</div>
                      <div className="h-[12px]"></div>
                      <div className="h-[12px] flex items-center text-[10px]">Fri</div>
                      <div className="h-[12px]"></div>
                    </div>

                    {/* Contribution Squares */}
                    <div className="flex gap-[3px]">
                      {contributions.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                          {week.map((day, dayIndex) => (
                            <motion.div
                              key={`${weekIndex}-${dayIndex}`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.2,
                                delay: (weekIndex * 7 + dayIndex) * 0.001
                              }}
                              className={`w-[12px] h-[12px] rounded-sm ${
                                day.level === -1
                                  ? 'bg-transparent'
                                  : getLevelColor(day.level)
                              } ${day.level !== -1 ? 'cursor-pointer transition-transform hover:scale-125' : ''}`}
                              title={day.date ? `${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}` : ''}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-[12px] h-[12px] rounded-sm ${getLevelColor(level)}`}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {error} - Showing sample data
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubContributions;
