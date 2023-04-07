import { createClient } from '@supabase/supabase-js';

const URL = "https://sftycubpnunzvzjwehbc.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdHljdWJwbnVuenZ6andlaGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODQ1NTIsImV4cCI6MTk5NjQ2MDU1Mn0.IUDMS0JWGVndra2a_vOJW0nnaj0ZofiBPJqI04HX7V0" ;

export const supabase = createClient(URL, API_KEY);

