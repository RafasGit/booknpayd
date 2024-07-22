import { Outfit } from "next/font/google";
import Header from "./_components/header";
import "./globals.css";
import NextAuthSessionProvider from "./provider";
import { AuthProvider } from "@descope/nextjs-sdk/*";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "book N pay",
  description: "Service & Consultation App ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider projectId="P2fmdOuoO0E8eSkKR93txl4XGk3m">
        <div className="mx-6 md:mx-16">
          <Header />
          <Toaster/>
          {children}
        </div>
        
        </AuthProvider>
      </body>
    </html>
  );
}