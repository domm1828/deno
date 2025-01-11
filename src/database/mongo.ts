import "https://deno.land/x/dotenv/load.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const client = new MongoClient();
const MONGO_URI = Deno.env.get("MONGO_URI") || "mongodb://localhost:27017";

await client.connect(MONGO_URI);

const db = client.database("deno_crud");

export { db };
