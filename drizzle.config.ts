import type {Config} from "drizzle-kit"
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL){
    console.log("Cannot find DB Url")
}
console.log("DATABASE_URL :  " + process.env.DATABASE_URL);

export default {
    schema: "./src/lib/supabase/schema.ts",
    out: "./migrations",
    driver: 'pg',
    dbCredentials: {
      connectionString: process.env.DATABASE_URL || "",
    }
  } satisfies Config;