import { Inter } from "next/font/google";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

// Cấu hình font chữ
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Giúp font load mượt mà hơn
  variable: "--font-inter", // Optional: nếu muốn dùng CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
