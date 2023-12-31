import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>{props.children}</body>
        </html>
    );
}
