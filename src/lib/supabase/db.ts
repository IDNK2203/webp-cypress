import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "../../../migrations/schema"

if (!process.env.DATABASE_URL){
    console.log("Cannot find DB Url")
}
console.log("DATABASE_URL :  " + process.env.DATABASE_URL);

const client = postgres(process.env.DATABASE_URL as string , { max: 1 })
const db = drizzle(client,{schema});
const migrateDb = async()=>{
    try {
        console.log("Migrating DB");
        await migrate(db, { migrationsFolder: "migrations" });
        console.log("DB Migration Successful");
        
    } catch (error) {
        console.log("Migrating DB Error");
    }
    
}
migrateDb()
export default db;