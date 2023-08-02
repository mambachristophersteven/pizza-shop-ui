// import { NextResponse } from "next/server";

// export default function handler(req, res){
//     res.status(200).json({name: 'John Doe'})
// }

export async function GET() {
    return new Response("hello")
}
 
