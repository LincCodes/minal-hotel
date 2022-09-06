import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient("https://oflponbtrtopuybopbls.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbHBvbmJ0cnRvcHV5Ym9wYmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIwMzE0NjQsImV4cCI6MTk3NzYwNzQ2NH0.hqN4IihQ4O-BURaU8wTxt3SD9RfwFazmborW2Y7m2OQ")