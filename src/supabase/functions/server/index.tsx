import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import * as kv from './kv_store.tsx'

const app = new Hono()

// CORS middleware - must be permissive for cross-origin requests
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.use('*', logger(console.log))

// Health check endpoint
app.get('/make-server-c4d5135a/health', async (c) => {
  try {
    // Test database connection
    const testKey = `health_check_${Date.now()}`
    const testValue = { timestamp: new Date().toISOString() }
    
    await kv.set(testKey, testValue)
    const retrieved = await kv.get(testKey)
    await kv.del(testKey)
    
    return c.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      database: 'connected',
      test_successful: !!retrieved
    })
  } catch (error) {
    console.error('Health check failed:', error)
    return c.json({ 
      status: 'error', 
      timestamp: new Date().toISOString(),
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, 500)
  }
})

// Root endpoint for testing
app.get('/make-server-c4d5135a/', (c) => {
  return c.json({ 
    message: 'Server is running', 
    timestamp: new Date().toISOString(),
    environment: {
      hasSupabaseUrl: !!Deno.env.get('SUPABASE_URL'),
      hasServiceRoleKey: !!Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    }
  })
})

// Fallback for unmatched routes
app.all('*', (c) => {
  console.log('Unmatched route:', c.req.url)
  return c.json({ error: 'Route not found', url: c.req.url }, 404)
})

Deno.serve(app.fetch)