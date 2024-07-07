import { createClient } from '@supabase/supabase-js'
// import { Provider } from 'react-supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANNON_PUBLIC;

console.log('Inside createClient Call - Supabase URL:', supabaseUrl);
console.log('Inside createClient Call - Supabase Key:', supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
// export { supabase, Provider };