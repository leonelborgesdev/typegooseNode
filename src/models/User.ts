import { prop } from "@typegoose/typegoose"

class User{

    @prop()
    firstname: string

    @prop()
    lastname: string

    @prop()
    email: string

    @prop()
    password: string

}