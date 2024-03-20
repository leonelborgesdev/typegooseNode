import { Ref, getModelForClass, prop } from "@typegoose/typegoose"
import { Comment } from "./Comment";
import { Userclass } from "./User";

class Product{

    @prop({ required : true})
    name: string

    @prop({ type : Number, default: 0})
    price: number

    @prop({ lowercase : true})
    url: string

    @prop({type: ()=>[String]})
    tags: string[]

    @prop({type: ()=>[Comment]})
    comments: Comment[]

    @prop({ref: ()=> Userclass})
    owner: Ref<Userclass>
}

const ProductModel=getModelForClass(Product);

export default ProductModel