import Image from "next/image";
import Link from "next/link";
import ContentListDraft from "@/components/ContentListDraft";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex">
        <SideBar />
        <ContentListDraft />
      </main>
    </div>
  );
}
