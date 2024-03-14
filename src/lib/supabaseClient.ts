import { createClient } from "@supabase/supabase-js";

const SUPABSE_URL = process.env.NEXT_PUBLIC_SUPABS_API_URL!;
const SUPABSE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABS_ANON_KEY!;

export const supabase = createClient(SUPABSE_URL, SUPABSE_ANON_KEY, {
  auth: {
    persistSession: false,
  },
});
