import Logo from "@/components/shared/Logo/Logo";
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar";
import {
    Home,
    Settings,
    FlaskConical,
    ScrollText,
    WalletCards,
} from "lucide-react";
import { BtnCreateInterview } from "@/components/shared";
import { AccesStatus } from "./AccesStatus";

const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Entrevistas",
        url: "#",
        icon: FlaskConical,
    },
    {
        title: "Todas Las entrevistas",
        url: "#",
        icon: ScrollText,
    },
    {
        title: "Payments",
        url: "#",
        icon: WalletCards,
    },
    {
        title: "Setting",
        url: "#",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar className="text-white">
            <SidebarHeader>
                <Logo />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <BtnCreateInterview />
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="w-10 h-10 shrink-0 !text-3xl" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <AccesStatus />
            </SidebarFooter>
        </Sidebar>
    );
}
