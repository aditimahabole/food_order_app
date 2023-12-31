import mongoose, { Schema, Document, Model, mongo } from "mongoose";
interface FoodDoc extends Document{
    vandorId:string; // kind of foreign key 
    name:string;
    description:string;
    category:string;
    foodType:string;
    readyTime:number;
    price:number;
    rating:number;
    images:[string];
}
const FoodSchema = new Schema(
    {
      vandorId: { type: String },
      name: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String},
      foodType: { type: String, required: true },
      readyTime: { type: Number},
      price: { type: Number, required: true },
      rating: { type: String },
      images: { type: [String]},
    },
    {
        toJSON:{
            transform(doc,ret){
                delete ret.__v,
                delete ret.createdAt,
                delete ret.updatedAt

            }
        },
        timestamps:true
    }
)

const Food = mongoose.model<FoodDoc>('food',FoodSchema);
export {Food}