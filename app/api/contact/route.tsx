import { NextResponse } from "next/server";

export const POST = async (req: any, res: any) => {
    const data = await req.json();
    console.log(data);
    
    return NextResponse.json({ message: ['hi from contact route'] });
}