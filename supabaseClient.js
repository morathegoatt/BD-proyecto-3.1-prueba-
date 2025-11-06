// supabaseClient.js

// biblioteca 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// URL
const supabaseUrl = 'https://hjwzvrmgjqlhudzgjvur.supabase.co'

// clave anon
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqd3p2cm1nanFsaHVkemdqdnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMzgzNTksImV4cCI6MjA3NTYxNDM1OX0.i0lDd8lgFoun78v2iVQ-CP6KecYfQRBS5fXLatz1n84'

// Crea y exporta el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)