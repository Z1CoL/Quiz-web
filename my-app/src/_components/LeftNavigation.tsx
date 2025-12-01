"use client";

import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";

export default function LeftNavigation() {
  const sidebar = useSidebar();

  return (
    <div>
      <button onClick={sidebar.toggle}>
        <Image src="/History.svg" height={40} width={40} alt="History" />
      </button>
    </div>
  );
}
