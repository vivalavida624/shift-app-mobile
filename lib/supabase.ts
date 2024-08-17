import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kbkjlfnjpzfbpgvksuxj.supabase.co"
const supabaseAnonKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtia2psZm5qcHpmYnBndmtzdXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzODQ0MzksImV4cCI6MjAzODk2MDQzOX0.eg_i1a3PfK-6QQ5aeJ-WtwXq54yvxWZGC80k_SNWsTo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})