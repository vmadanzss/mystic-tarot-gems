import { NextResponse } from 'next/server'
import { checkDatabaseConnection } from '@/lib/db-utils'

export async function GET() {
  try {
    const dbStatus = await checkDatabaseConnection()
    
    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: dbStatus
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        database: { status: 'disconnected', error: 'Connection failed' }
      },
      { status: 500 }
    )
  }
}