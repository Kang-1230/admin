import { createClient } from "@/utils/supabase/client";

export default async function Logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("로그아웃 에러", error.message);
  }
}
