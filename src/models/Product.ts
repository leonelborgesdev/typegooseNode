import { getModelForClass, prop } from "@typegoose/typegoose"
import { Comment } from "./Comment";

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
}

const ProductModel=getModelForClass(Product);

export default ProductModel