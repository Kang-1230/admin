import { createClient } from "@/utils/supabase/client";
export async function signUpNewUser(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:3000"
    }
  });

  if (error) {
    throw new Error(error.message);
  } else {
    console.log("회원가입 성공", data);
  }
}
