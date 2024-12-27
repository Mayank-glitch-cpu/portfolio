import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Define the path to the visit counter file
const counterFile = path.join(process.cwd(), 'visit-counter.txt');

// Function to ensure the counter file exists
async function ensureFileExists() {
  try {
    await fs.access(counterFile); // Check if the file exists
  } catch {
    // If the file does not exist, create it with an initial count of 0
    await fs.writeFile(counterFile, '0');
    console.log('Created visit-counter.txt file');
  }
}

// GET handler to retrieve the visit count
export async function GET() {
  try {
    await ensureFileExists();
    const count = await fs.readFile(counterFile, 'utf-8');
    return NextResponse.json({ count: parseInt(count, 10) });
  } catch (error) {
    console.error('Error reading visit count:', error);

    // Safely extract error message
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json({ count: 0, error: errorMessage });
  }
}

// POST handler to increment the visit count
export async function POST() {
  try {
    await ensureFileExists();
    let count = 0;

    // Try to read the current count from the file
    try {
      const currentCount = await fs.readFile(counterFile, 'utf-8');
      count = parseInt(currentCount, 10);
    } catch (error) {
      console.error('Error reading visit count, starting from 0:', error);
    }

    count++; // Increment the count
    await fs.writeFile(counterFile, count.toString()); // Save the updated count
    console.log('Updated visit count:', count);
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Failed to increment counter:', error);

    // Safely extract error message
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      { error: 'Failed to increment counter', details: errorMessage },
      { status: 500 }
    );
  }
}
