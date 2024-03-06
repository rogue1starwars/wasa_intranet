import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

// export async function POST(req: Request, res: Response) {
//   const { id, title, content } = await req.json();

//   const { data, error } = await supabase
//     .from("posts")
//     .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

//   if (error) {
//     return NextResponse.json(error);
//   }

//   return NextResponse.json(data, { status: 201 });
// }

// export async function PUT(req: Request, res: Response) {
//   const { id, title, content } = await req.json();

//   const { data, error } = await supabase
//     .from("posts")
//     .update({ title, content, createdAt: new Date().toISOString() })
//     .eq("id", id)
//     .select();

//   if (error) {
//     return NextResponse.json(error);
//   }

//   return NextResponse.json(data);
// }
