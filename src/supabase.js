import { createClient } from "@supabase/supabase-js";

const supabaseUrl = `${secrets.SUPABASEURL}`;
const supabaseKey = `${secrets.SUPABASEKEY}`;

  const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
