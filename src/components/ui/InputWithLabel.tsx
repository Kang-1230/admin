import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function InputWithLabel({
  label,
  type,
  placeholder,
  id,
  className,
  inputProps
}: {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="w-full items-center justify-center">
      <Label
        htmlFor={id}
        className="font-pretendard text-regular-16 mb-[8px] text-gray-400"
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className={className}
        {...inputProps}
      />
    </div>
  );
}
