import { NextResponse } from "next/server";
import { supabaseAdmin } from "@core/supabase";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("cyphers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabaseAdmin
    .from("cyphers")
    .insert({
      round: body.round,
      audio_url: body.audioUrl,
      user_id: body.userId
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
