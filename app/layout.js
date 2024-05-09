import connectMongo from "@/services/mongo";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import AuthProvider from "./provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home",
  description: "this page is create for going to event.",
};

export default async function RootLayout({ children }) {
  const mongoConn = await connectMongo();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="py-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
