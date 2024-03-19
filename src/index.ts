import {connect} from "mongoose";
import User from "./models/User";

async function connectDB() {
    const db = await connect('mongodb://localhost/typegoosedb');
    console.log('database is connected to', db.connection.db.databaseName);
}

connectDB();

async function executeQuery() {
    
const user=new User({
    firstname: "Joe",
    lastname: "Doe",
    email: "joedoe@gmail.com",
    password: "12345"
})
await user.save()
}
executeQuery()