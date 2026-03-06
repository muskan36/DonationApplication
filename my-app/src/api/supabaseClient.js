import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bfzuhsbrfgvrqujrqbly.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmenVoc2JyZmd2cnF1anJxYmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTk3OTMsImV4cCI6MjA4ODI5NTc5M30.IpjAgOzxJNR7Kq2UcsYxn8Qyj9GrlINUcljieKJ-Gy4";

export const supabase = createClient(supabaseUrl, supabaseKey);