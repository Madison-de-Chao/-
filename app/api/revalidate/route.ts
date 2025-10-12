import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    // Check for secret token to prevent unauthorized access
    const authHeader = request.headers.get('authorization');
    const token = process.env.REVALIDATE_TOKEN;
    
    if (token && authHeader !== `Bearer ${token}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { path } = await request.json();
    
    if (!path) {
      return NextResponse.json(
        { error: 'Path is required' },
        { status: 400 }
      );
    }

    revalidatePath(path);

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now() 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error revalidating' },
      { status: 500 }
    );
  }
}
