import SessionProvider from "@/app/providers/SessionProvider";
import '@/app/globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@/app/style/tailwind.css'
import '@/app/style/common.css'
import { SWRProvider } from "./providers/SWRProvider";
// import { Nanum_Gothic } from "next/font/google";

// const nanum_gothic = Nanum_Gothic({
//   subsets: ["latin"],
//   weight: ["400", "700", "800"],
//   display: 'swap',
// });

export const metadata = {
  title: "JLPTCODE",
  author: "JLPTCODE",
  description: "일본어능력시험, 일본어 등급별, 년도별, 과목별 기출문제 풀이와 단어외우기를 학습할수 있고, 해석기능과 채점기능을 제공합니다.",
  keywords: "일본어능력시험, 일본어, JLPT, JPT, 일본어 기출문제, 기출문제 풀이, 일본어 단어, 단어외우기, 모쿠모쿠 일본어, 일본, 일본여행, 동경, 오사카, 나고야, 일본친구",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <SessionProvider>
          <SWRProvider>
            <main>
              {children}
            </main>
          </SWRProvider>
        </SessionProvider>
        {/* <script id="_wauy9w">var _wau = _wau || []; _wau.push(["classic", "2obpe3cnhe", "y9w"]);</script><script async src="//waust.at/c.js"></script> */}
      </body>
    </html>
  )
}
