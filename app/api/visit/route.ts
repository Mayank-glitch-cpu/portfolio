import { NextResponse } from 'next/server'
import { put, list } from "@vercel/blob";

const BLOB_NAME = 'visit_counter/visit-counter.txt';

async function getVisitCount(): Promise<number> {
  try {
    const { blobs } = await list();
    const counterBlob = blobs.find(blob => blob.pathname === BLOB_NAME);
    
    if (counterBlob) {
      // The blob is found; now we need to fetch the content
      const { blob } = await counterBlob.get();  // Fetch the content of the blob
      const countText = await blob.text();  // Read the blob as text
      const count = parseInt(countText, 10);  // Convert to number
      return count;
    }
    
    return 0;  // If blob is not found, return 0
  } catch (error) {
    console.error('Error reading visit count:', error);
    return 0;
  }
}

async function incrementVisitCount(currentCount: number): Promise<number> {
  const newCount = currentCount + 1;
  
  // Store the new count as text in the blob
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
