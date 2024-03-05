import { getPosts } from "@/lib/data"
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        // console.log("GET")
        // get a blog by ID
        const posts = getPosts();
        return NextResponse.json({message: "OK", posts}, {status: 200});
    } catch (error) {
        // Handle the error or log it
        console.error("Error fetching posts:", error);
        // Return an error response
        return NextResponse.json({message: "Error fetching posts", error}, {status: 500});
    }
}

export const PUT = async (req: Request) => {
    console.log("PUT")
    //update blog by its ID;
}

export const DELETE = async (req: Request) => {
    console.log("DELETe")
    //delete blog by its ID
}