"use client";

import { AppSidebar } from "@/_components/AppSidebar";
import { Home } from "@/_components/HomeScreen";

export default function HomePage() {
  return (
    <div className="flex">
      <AppSidebar />
      <Home />
    </div>
  );
}
