// src/app/api/guestbook/route.ts
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data } = await supabase
    .from("message")
    .select()
    .order("created_at", { ascending: false });

  return NextResponse.json(data || []);
}