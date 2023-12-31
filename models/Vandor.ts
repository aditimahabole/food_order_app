import mongoose, { Schema, Document, Model, mongo } from "mongoose";
// 20 dec 8:19pm
// creating  Interface
interface VandorDoc extends Document {
  name: string;
  owner_name: string;
  foodType: [string];
  pincode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImages: [string];
  rating: number;
  foods: any;
}
const VandorSchema = new Schema(
  {
    name: { type: String, required: true },
    owner_name: { type: String, required: true },
    foodType: { type: [String], required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String,required:true },
    serviceAvailable: { type: Boolean},
    coverImages: { type: [String] },
    rating: { type: Number},
    foods: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "food",
      },
    ],
    //   It's an array of objects, where each object is expected to be of type mongoose.Schema.ObjectId
    //  and is referring to the "food" model (specified by ref: "food")
    // using it after creating food model : 20 dec 10:37 pm

  },
  { toJSON:{
    transform(doc,ret)
    {
      delete ret.password;
      delete ret.salt;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;

    }
  },
    timestamps: true }
);


// const Vandor = mongoose.model('vandor',VandorSchema);
const Vandor = mongoose.model<VandorDoc>('vandor',VandorSchema); 
// in Typescript we have to specify <VandorDoc>
export {Vandor}