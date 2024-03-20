import { prop, getModelForClass, Ref, ReturnModelType } from "@typegoose/typegoose"
import { Role } from "./Role";
export class User{

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

    static async findByFirstName(
        this: ReturnModelType<typeof User>, 
        firstname : string
    ) {
        return this.find({firstname})
    }
    encryptPassword(password: string){
        return '123zxc'+ password
    }
}

const UserModel= getModelForClass(User);
export default UserModel