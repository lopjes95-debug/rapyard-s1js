import { NextResponse } from "next/server";
import { supabaseAdmin } from "@core/supabase";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("battles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabaseAdmin
    .from("battles")
    .insert({
      user1: body.user1,
      user2: body.user2,
      winner: body.winner ?? null
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
