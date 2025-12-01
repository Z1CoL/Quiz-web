import Navigation from "@/_components/Navigation";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <html lang="en">
        <body className="flex h-screen bg-gray-100">
          <main className="flex-1 overflow-auto">
            <Navigation />
            {children}
          </main>
        </body>
      </html>
    </SidebarProvider>
  );
}
