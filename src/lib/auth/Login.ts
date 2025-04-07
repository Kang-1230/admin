import { createClient } from "@/utils/supabase/client";

export async function signInWithPassWord(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password"
  });

  if (error) {
    throw new Error(error.message);
  } else {
    alert("로그인 성공");
    console.log("로그인 data", data);
  }
}
