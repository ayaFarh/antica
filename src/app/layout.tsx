import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_Component/Navbar/page";
import Footer from "./_Component/Footer/page";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
       <div className="min-h-screen">
       {children}
       </div>
        <Footer/>
      </body>
    </html>
  );
}
