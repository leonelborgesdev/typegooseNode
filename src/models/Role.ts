import { getModelForClass, prop } from "@typegoose/typegoose";


class Role{
    @prop()
    name: string
}

const RoleModel= getModelForClass(Role)
export default RoleModel