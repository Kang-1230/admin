"use client";

import Logout from "@/lib/auth/logout";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        Logout();
      }}
    >
      로그아웃
    </button>
  );
}
