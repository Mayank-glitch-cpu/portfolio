import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const counterFile = path.join(process.cwd(), 'visit-counter.txt');

async function ensureFileExists() {
  try {
    await fs.access(counterFile);
  } catch {
    // File doesn't exist, create it with initial count of 0
    await fs.writeFile(counterFile, '0');
    console.log('Created visit-counter.txt file');
  }
}

export async function GET() {
  try {
    await ensureFileExists();
    const count = await fs.readFile(counterFile, 'utf-8');
    return NextResponse.json({ count: parseInt(count, 10) });
  } catch (error) {
    console.error('Error reading visit count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to read counter' });
  }
}

export async function POST() {
  try {
    await ensureFileExists();
    let count = 0;
    try {
      const currentCount = await fs.readFile(counterFile, 'utf-8');
      count = parseInt(currentCount, 10);
    } catch (error) {
      console.error('Error reading visit count, starting from 0:', error);
    }
    count++;
    await fs.writeFile(counterFile, count.toString());
    console.log('Updated visit count:', count);
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Failed to increment counter:', error);

    // Safely access error.message
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      { error: 'Failed to increment counter', details: errorMessage },
      { status: 500 }
    );
  }
}
