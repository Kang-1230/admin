import Image from "next/image";
import Link from "next/link";
import ContentListDraft from "@/components/ContentListDraft";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/login">로그인</Link>
      <Link href="/sign-up">회원가입</Link>
      <main className="flex">
        <SideBar />
        <ContentListDraft />
      </main>
    </div>
  );
}
