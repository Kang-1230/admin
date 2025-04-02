import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button } from "@/components/ui/Button";
export default function SignUp() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-full w-[50%] bg-gradient-to-r from-[#3A57E8] to-[#213182]"></div>
      <div className="flex h-full w-[50%] items-center justify-center">
        <form className="flex h-[649px] w-[516px] flex-col items-center justify-center gap-[24px] p-[16px]">
          <h1 className="font-pretendard font-regular text-[32px]">
            회원 가입
          </h1>
          <InputWithLabel
            label="이메일"
            type="email"
            placeholder="이메일"
            id="email"
            className="w-full border-blue-600"
          />
          <InputWithLabel
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            id="password"
            className="w-full border-blue-600"
          />

          <Button className="h-[44px] w-[164px] bg-blue-600 hover:bg-blue-900">
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}
