import { NextResponse } from 'next/server'
import { put, get, list } from "@vercel/blob";

const BLOB_NAME = 'visit-counter.txt';

async function getVisitCount(): Promise<number> {
  try {
    const { blobs } = await list();
    const counterBlob = blobs.find(blob => blob.pathname === BLOB_NAME);
    
    if (counterBlob) {
      const { blob } = await get(BLOB_NAME);
      const count = await blob.text();
      return parseInt(count, 10);
    }
    
    return 0;
  } catch (error) {
    console.error('Error reading visit count:', error);
    return 0;
  }
}

async function incrementVisitCount(currentCount: number): Promise<number> {
  const newCount = currentCount + 1;
  await put(BLOB_NAME, newCount.toString(), { access: 'public' });
  return newCount;
}

export async function GET() {
  try {
    const count = await getVisitCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error reading visit count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to read counter' });
  }
}

export async function POST() {
  try {
    const currentCount = await getVisitCount();
    const newCount = await incrementVisitCount(currentCount);
    console.log('Updated visit count:', newCount);
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Failed to increment counter:', error);
    return NextResponse.json({ error: 'Failed to increment counter', details: error.message }, { status: 500 });
  }
}

