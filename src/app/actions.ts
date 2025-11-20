// src/app/actions.ts
"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function submitGuestbook(formData: FormData) {
  const name = (formData.get("name") as string).trim();
  const message = (formData.get("message") as string).trim();

  if (!name || !message || name.length > 50 || message.length > 300) {
    return { success: false };
  }

  const { data, error } = await supabase
    .from("message")
    .insert({ name, message })
    .select()
    .single();

  if (error) {
    console.error(error);
    return { success: false };
  }

  return { success: true, data };
}