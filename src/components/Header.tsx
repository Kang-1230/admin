import Logo from "@/assets/images/Logo.svg";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Header() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  return (
    <div className="flex h-[76px] w-full items-center justify-between">
      <Logo />
      <div className="w-max-w-[200px] flex h-full items-center justify-center pr-[32px]">
        {data.user.email} 님 안녕하세요!
      </div>
    </div>
  );
}
