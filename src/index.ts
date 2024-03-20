import {connect} from "mongoose";
import User from "./models/User";
import Product from "./models/Product";
import Role from "./models/Role";

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
// const userdelete=await User.findByIdAndDelete("65f9a9c14820867bc6f2b368");
// console.log(userdelete)
// const usersdelete= await User.deleteMany({email: "joedoe@gmail.com"})
// console.log(usersdelete)

    // const newProduct= await Product.create({
    //     name: "laptop",
    //     price: 30,
    //     url: "product-01",
    //     tags:['laptop','gaming','razer'],
    //     comments:[{text: 'awesome product'},{text: 'product x'}],
    //     owner: "65fa54e066bfe1d92d458e0c"
    // })
    // console.log(newProduct)
    
//-------------select product----------//
// const product= await Product.findById("65fa582196e2ddf2aad117cb").populate("owner");
// console.log(product);

// const results= await Role.insertMany([
//     {name: 'admin'},
//     {name: 'guest'},
//     {name: 'user'}
// ])

    // console.log(results)
    //---------Create User and roles-----------//
    // const user=new User({
    //     firstname: "ryan",
    //     lastname: "Ray",
    //     email: "raye@gmail.com",
    //     password: "123456",
    //     roles: ["65fa5b410767b191694604f2", "65fa5b410767b191694604f4" ]
    // })
    // await user.save()
    // console.log(user)

    // const user= await User.findById("65fa5cfc31eba681c08c14a6").populate('roles', "name -_id")
    // console.log(user)
    
    //------------------------Methods typegoose--------------------//
    // const result=await User.findByFirstName('Joe');
    // console.log("result", result)

    const user=new User({
            firstname: "michael",
            lastname: "mich",
            email: "raye@gmail.com",
    })

    user.password= user.encryptPassword("123456")
    await user.save()
    console.log("userCreate", user)
}
executeQuery()
