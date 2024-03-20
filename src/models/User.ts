import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { Role } from "./Role";
export class Userclass{

    @prop({required: true})//propiedades de mongoose
    firstname: string//typescript

    @prop({required: true})
    lastname: string

    @prop({required: true, trim: true})
    email: string

    @prop({required: true, minlength: 6})
    password: string

    @prop({ref: () => Role})
    roles: Ref<Role>[]
}

const UserModel= getModelForClass(Userclass);
export default UserModel