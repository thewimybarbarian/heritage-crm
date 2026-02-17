import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// Validates the request body needs to match the schema from the active website
const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  situation: z.string().min(1),
  address: z.string().optional(),
  message: z.string().optional(),
  status: z.string().default('new'),
  priority: z.string().default('medium'),
  source: z.string().default('website'),
})

export async function POST(request: Request) {
  try {
    // Check for API key authentication
    const apiKey = request.headers.get('x-api-key')
    const validApiKey = process.env.CRM_API_KEY
    
    // Simple API key check
    if (validApiKey && apiKey !== validApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    
    // Validate authentication and data
    const validationResult = leadSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: validationResult.error.format() },
        { status: 400 }
      )
    }

    // Initialize Supabase client
    // We use the service role key to bypass RLS for administrative tasks/backend writes
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase credentials')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const data = validationResult.data

    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from('leads')
      .insert(data)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    return NextResponse.json(insertedData, { status: 201 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
