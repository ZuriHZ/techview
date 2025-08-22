import Logo from "@/components/shared/Logo/Logo";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
    return (
        <nav className="w-[90%] md:w-full md:max-w-5xl mx-auto sticky top-5 z-20 flex justify-between items-center px-6 py-3 bg-purple-500/30 backdrop-blur-md rounded-full shadow-lg border border-y-purple-400">
             <Logo />
            <NavbarDesktop />

            <NavbarMobile />
        </nav>
    );
}
