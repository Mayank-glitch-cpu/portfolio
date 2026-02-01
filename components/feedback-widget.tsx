"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const EMOJIS = [
  { icon: "❤️", label: "Loved it" },
  { icon: "😊", label: "Liked it" },
  { icon: "😐", label: "It was okay" },
];

const STORAGE_KEY = "portfolio_feedback_dismissed";
const TIME_TRIGGER_MS = 5 * 60 * 1000; // 5 minutes

export default function FeedbackWidget() {
  const [visible, setVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const triggered = useRef(false);

  const show = useCallback(() => {
    if (triggered.current) return;
    triggered.current = true;
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    // Don't show if already dismissed
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    // Trigger 1: Time on page
    const timer = setTimeout(show, TIME_TRIGGER_MS);

    // Trigger 2: Scroll to bottom (observe the footer/contact section)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    // Wait briefly for DOM to be ready, then observe the footer
    const raf = requestAnimationFrame(() => {
      const footer = document.querySelector("footer");
      if (footer) observer.observe(footer);
    });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [show]);

  const handleSubmit = async () => {
    if (!selectedEmoji) return;
    setSubmitting(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emoji: selectedEmoji,
          name: name.trim() || undefined,
          comment: comment.trim() || undefined,
        }),
      });
      setSubmitted(true);
      setTimeout(dismiss, 2000);
    } catch {
      // Silently fail — don't annoy the user with errors
      dismiss();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 w-[320px] max-w-[calc(100vw-48px)]"
        >
          <div className="rounded-xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl p-5">
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss feedback"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-2"
              >
                <p className="text-2xl mb-1">🙏</p>
                <p className="text-sm text-muted-foreground">
                  Thanks for your feedback!
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-sm font-medium mb-3 pr-6">
                  Enjoyed the portfolio?
                </p>

                {/* Emoji selection */}
                <div className="flex gap-2 mb-3">
                  {EMOJIS.map(({ icon, label }) => (
                    <button
                      key={icon}
                      onClick={() => setSelectedEmoji(icon)}
                      aria-label={label}
                      className={`flex-1 text-2xl py-2 rounded-lg transition-all ${
                        selectedEmoji === icon
                          ? "bg-primary/20 ring-1 ring-primary scale-110"
                          : "hover:bg-muted"
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>

                {/* Expanded form after emoji selection */}
                <AnimatePresence>
                  {selectedEmoji && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <Input
                        placeholder="Name (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-2 text-sm h-9"
                      />
                      <Textarea
                        placeholder="Any thoughts? (optional)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={2}
                        className="mb-3 text-sm resize-none"
                      />
                      <Button
                        onClick={handleSubmit}
                        disabled={submitting}
                        size="sm"
                        className="w-full"
                      >
                        {submitting ? "Sending..." : "Send Feedback"}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dismiss link */}
                {!selectedEmoji && (
                  <button
                    onClick={dismiss}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    No thanks
                  </button>
                )}
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
