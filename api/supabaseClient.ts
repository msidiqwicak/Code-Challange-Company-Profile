
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rzvfoughwcwkniiwkmul.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dmZvdWdod2N3a25paXdrbXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NzE4NDYsImV4cCI6MjA4ODU0Nzg0Nn0.Eb5Saqh6j21WRVK9OJZOfyZGwB_Hv0sV3VN9ie9HbrM";

export const supabase = createClient(supabaseUrl, supabaseKey);