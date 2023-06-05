import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fpcwysrviayjnmrtdgwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwY3d5c3J2aWF5am5tcnRkZ3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4MDMzODgsImV4cCI6MTk5NzM3OTM4OH0.pJ9NjU7JO466BzK2uSbzOKxIkMxajcHQ8nWtsY53U0U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
