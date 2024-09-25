import SessionProvider from "@/app/providers/SessionProvider";
import '@/app/globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@/app/style/tailwind.css'
import '@/app/style/common.css'
import { SWRProvider } from "./providers/SWRProvider";
import VisitHistory from "./components/Visit/VisitHistory";
import { Suspense } from "react";

import { Nanum_Gothic, Noto_Serif_JP } from "next/font/google";

const nanumGothic = Nanum_Gothic({
  preload: false,
  weight: ["400", "700", "800"],
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  preload: false,
  weight: ["400", "700", "900"],
  display: 'swap',
});

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
      <body className={`${nanumGothic.className} ${notoSerifJP.className}`}>
        <SessionProvider>
          <SWRProvider>
            <main>
              <Suspense>
                {children}
              </Suspense>
            </main>
          </SWRProvider>
        </SessionProvider>

        <VisitHistory />
      </body>
    </html>
  )
}
