import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        timestamps:true,
        _id: false
    }
})

export class Comment{
    @prop()
    text: string
}