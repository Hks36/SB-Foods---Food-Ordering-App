import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://Gayathri:Gundu2003@cluster0.tiebsgz.mongodb.net/food-del').then(() => console.log("DB Connected"));

}
