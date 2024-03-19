import { getModelForClass, prop } from "@typegoose/typegoose"

class Product{

    @prop({required:true})
    name: string

    @prop({type:Number, default: 0})
    price: number

    @prop({lowercase: true})
    url: string

    @prop()
    tags: string[]
}

const ProductModel=getModelForClass(Product);

export default ProductModel