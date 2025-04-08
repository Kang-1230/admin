import Link from "next/link";

export default function SideBar() {
  return (
    <div className="h-full w-[257px] bg-amber-400">
      <div className="flex flex-col items-center pt-[16px]">
        Home
        <ul className="w-[233px] rounded-lg bg-[#3A57E8] shadow-[#0048B2]">
          <Link href="/">콘텐츠 관리</Link>
        </ul>
      </div>
    </div>
  );
}
