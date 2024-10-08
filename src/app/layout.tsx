import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background/bg-app.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="flex flex-1 flex-grow">
          {children}
        </div>
        {/* <div className="bg-green-300 p-5">
            Footer
        </div> */}
        <BottomNav />
      </body>
    </html>
  );
}