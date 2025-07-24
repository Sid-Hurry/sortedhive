import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 

export const metadata = {
  title: "SortedHive - Your trusted URL shortener",
  description: "SortedHive helps you shorten your Urls easily and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` `}
      > 
      <Navbar/>
        {children}
      </body>
    </html>
  );
}