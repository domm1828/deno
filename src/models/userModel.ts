import { db } from "../database/mongo.ts";

export interface User {
  _id: { $oid: string };
  name: string;
  email: string;
  age: number;
}

export const usersCollection = db.collection<User>("users");