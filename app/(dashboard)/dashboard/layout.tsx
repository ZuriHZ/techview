import { Metadata } from "next";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components";
import { UserButton, Show } from "@clerk/nextjs";
export const metadata: Metadata = {
    title: "Dashboard | Techview ",
    description: "Dashboard para el usuario",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full min-h-screen p-6 ">
                    <div className="flex justify-between">
                        <SidebarTrigger className="text-white" />
                        <Show when="signed-in">
                            <UserButton />
                        </Show>
                    </div>
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
}
