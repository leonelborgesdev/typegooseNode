import { prop, getModelForClass } from "@typegoose/typegoose"

export class Userclass{

    @prop({required: true})//propiedades de mongoose
    firstname: string//typescript

    @prop({required: true})
    lastname: string

    @prop({required: true, trim: true})
    email: string

    @prop({required: true, minlength: 6})
    password: string

}

const UserModel= getModelForClass(Userclass);
export default UserModel