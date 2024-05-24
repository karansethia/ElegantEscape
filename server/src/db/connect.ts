import mongoose from "mongoose";

const connectDB = async(url: string) => {
   try{

   await mongoose.connect(url);
   }catch (e){
      console.log(e.message)
      throw new Error("Unable to connect to database")
   }
}
export default connectDB;