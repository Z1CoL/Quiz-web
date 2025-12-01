"use client";

import { AppSidebar } from "@/_components/AppSidebar";
import HomeScreen from "@/_components/HomeScreen";

export default function HomePage() {
  return (
    <div className="flex">
      <AppSidebar />
      <HomeScreen />
    </div>
  );
}
