import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ezbooking",
  description: "Frontend for Ezbooking",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser = {currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
