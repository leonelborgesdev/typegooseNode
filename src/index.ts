import {connect} from "mongoose";
import User from "./models/User";

async function connectDB() {
    const db = await connect('mongodb://localhost/typegoosedb');
    console.log('database is connected to', db.connection.db.databaseName);
}

connectDB();

async function executeQuery() {
    //---------Create User-----------//
// const user=new User({
//     firstname: "Joe",
//     lastname: "Doe",
//     email: "joedoe@gmail.com",
//     password: "123456"
// })
// await user.save()


//----------------------select users---------------//
// const users= User.find({},{firstname:1, _id:0});
// console.log(users)

//-------------select user----------//
// const user= await User.findById("65f9a9c14820867bc6f2b368",{firstname:1, _id:0});
// console.log(user)

//------------findOneandUpdate---------------//
// const user= await User.findOneAndUpdate({_id: "65f9a9c14820867bc6f2b368"},
//  {firstname:"Ryan"},
//   { new: true})
// console.log(user)

//--------------findbyIdandDelete-----------//
const userdelete=await User.findByIdAndDelete("65f9a9c14820867bc6f2b368");
console.log(userdelete)
}
executeQuery()
