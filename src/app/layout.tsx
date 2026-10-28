import "./globals.css";
import LuxuryBackground from "@/components/LuxuryBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#FAF7F2] text-neutral-900 overflow-x-hidden selection:bg-[#C5A059]/20 selection:text-[#B88E44]">
        <LuxuryBackground />
        <CustomCursor />

        <div className="relative z-10">{children}</div>

        <Footer />
      </body>
    </html>
  );
}