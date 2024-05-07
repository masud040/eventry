import connectMongo from "@/services/mongo";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home",
  description: "this project is created for manage events.",
};

export default async function RootLayout({ children }) {
  const mongoConn = await connectMongo();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="py-8">{children}</main>
      </body>
    </html>
  );
}
