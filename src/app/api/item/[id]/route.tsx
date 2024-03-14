import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const id = req.url.split("/item/")[1];

  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    notFound();
  }

  return NextResponse.json(data);
}

// export async function DELETE(req: Request, res: Response) {
//   const id = req.url.split("/blog/")[1];

//   const { error: deleteError } = await supabase
//     .from("posts")
//     .delete()
//     .eq("id", id);

//   if (deleteError) {
//     return NextResponse.json(deleteError);
//   }

//   return NextResponse.json({ status: 200 });
// }
