import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers, AuthProvider } from "./providers";
import ThemeSwitch from "./components/ThemeSwitch";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "San Raj",
  description: "A place where dreams are digitised.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:text-[#ffff]
       text-[#232323] z-10`}
      >
        <AuthProvider>
          <Providers>
            <ThemeSwitch />
            <Navbar />
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
