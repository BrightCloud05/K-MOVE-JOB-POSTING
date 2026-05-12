import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "K-Move Sydney | KOTRA 글로벌 채용 포털",
  description: "KOTRA K-Move Sydney - 호주 시드니 지역 한국 인재 해외 취업 지원 프로그램. IT, 마케팅, 금융 등 다양한 분야의 채용 기회를 확인하세요.",
  keywords: "KOTRA, K-Move, Sydney, 해외취업, 호주, 채용, 글로벌커리어",
  openGraph: {
    title: "K-Move Sydney | KOTRA 글로벌 채용 포털",
    description: "KOTRA K-Move Sydney - 호주 시드니 지역 한국 인재 해외 취업 지원 프로그램",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
