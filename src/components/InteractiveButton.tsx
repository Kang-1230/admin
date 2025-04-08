"use client";

export default function InteractiveButton({
  buttonName,
  buttonFn
}: {
  buttonName: string;
  buttonFn: () => void;
}) {
  return (
    <button
      onClick={() => {
        buttonFn();
      }}
    >
      {buttonName}
    </button>
  );
}
