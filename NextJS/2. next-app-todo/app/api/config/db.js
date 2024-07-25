import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kausikbhaumik42:TllbO2HsZDTGrYww@cluster0.8cnepc9.mongodb.net/Next-todo-app")
    console.log("DB connected")
}