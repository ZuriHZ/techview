"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { links } from "../Navbar.data";

export function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex md:hidden items-center gap-3">
            <Button
                className="text-black"
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <XIcon size={24} /> : <Menu size={24} />}
            </Button>
            {isOpen && (
                <div className="absolute top-full right-4 mt-4 bg-white rounded-lg text-black shadow-lg w-48 p-4 flex flex-col gap-3">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className=""
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
