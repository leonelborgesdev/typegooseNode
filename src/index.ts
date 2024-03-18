import mongoose from "mongoose";

async function connectDB() {
    const db = await mongoose.connect('mongodb://localhost/typegoosedb');
    console.log('database is connected to', db.connection.db.databaseName);
}

connectDB();