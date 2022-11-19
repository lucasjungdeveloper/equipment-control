import { createClient } from "@supabase/supabase-js";
import { env } from "../../env/client.mjs";

// const supabaseUrl = process.env.SUPABASE_URL;

// const supabaseAnonKey = process.env.SUPABASE_KEY;

export const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);