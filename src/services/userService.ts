import { usersCollection, User } from "../models/userModel.ts"; 

import { ObjectId  } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

export class UserService {
    async getAllUsers(): Promise<User[]> {
        return await usersCollection.find({}).toArray();
    }

    async getUserById(id: string): Promise<User | null> {
        return await usersCollection.findOne({ _id: new ObjectId(id) });
    }

    async createUser(data: Omit<User, "_id">): Promise<User> {
        const user = await usersCollection.insertOne(data);
        return user;
    }

    async updateUser(id: string, data: Partial<Omit<User, "_id">>): Promise<number> {
        return await usersCollection.updateOne({ _id: new ObjectId(id)}, { $set: data });
    }

    async deleteUser(id: string): Promise<number> {
        return await usersCollection.deleteOne({ _id: new ObjectId(id) });
    }
}
