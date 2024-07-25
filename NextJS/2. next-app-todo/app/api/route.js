import { NextResponse } from "next/server";
import { connectDB } from "./config/db";
import TodoModel from "./models/TodoModel";

const LoadDB = async () => {
    await connectDB()
}
LoadDB()

export async function GET(req) {
    const todos = await TodoModel.find({})
    return NextResponse.json({ todos: todos })
}

export async function POST(req) {
    const { title, description } = await req.json();
    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({ msg: "Todo is added" })
}

export async function DELETE(req) {
    const mongoId = await req.nextUrl.searchParams.get("mongoId");
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({ msg: "Todo is deleted" });
}

export async function PUT(req) {
    const mongoId = await req.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndUpdate(mongoId, {
        $set: {
            isCompleted: true
        }
    });
    return NextResponse.json({ msg: "Todo status changed" })
}