"use server";

import { z } from "zod";
import { FormSchema, SignupFormSchema } from "../types";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function userLogin({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

export async function userSignup({
  email,
  password,
}: z.infer<typeof SignupFormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase.from("users").select("*").eq("email", email);

  if (data?.length) return { error: { message: "user already exists", data } };

  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `http://localhost:3000/api/auth/callback`,
    },
  });
  const serializedRes = JSON.parse(JSON.stringify(response));
  return serializedRes;
}
