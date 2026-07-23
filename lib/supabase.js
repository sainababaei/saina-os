import { createClient } from '@supabase/supabase-js';

let supabaseClient;

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publishableKey) {
    throw new Error('Supabase is not configured.');
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, publishableKey);
  }

  return supabaseClient;
}
