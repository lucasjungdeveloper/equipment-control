import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tkbtlnpqsqpfajxufcld.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrYnRsbnBxc3FwZmFqeHVmY2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NjczMDIsImV4cCI6MTk4MjE0MzMwMn0.3NdfBbIjdBCWhNlDsBf9o1P5CHN5SaapbSnBRGKr9us";

// const supabaseUrl = process.env.SUPABASE_URL;

// const supabaseAnonKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);