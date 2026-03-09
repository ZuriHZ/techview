import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-lato",
});

export const metadata: Metadata = {
    title: "TechView App",
    description: "Aplicacion para prepararse  las entrevistas tecnicas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${lato.className} antialiased`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
