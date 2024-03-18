import {connect} from "mongoose";
import User from "./models/User";

async function connectDB() {
    const db = await connect('mongodb://localhost/typegoosedb');
    console.log('database is connected to', db.connection.db.databaseName);
}

connectDB();

const user=new User({
    firstname: "Joe",
    lastname: "Doe",
    email: "joedoe@gmail.com",
    password: "12345"
})

console.log(user)