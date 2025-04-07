import Image from "next/image";
import Link from "next/link";
import ContentListDraft from "@/components/ContentListDraft";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Link href="/login">로그인</Link>
        <Link href="/sign-up">회원가입</Link>
        <ContentListDraft />
      </main>
    </div>
  );
}
