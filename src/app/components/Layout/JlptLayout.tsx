import SessionProvider from "@/app/providers/SessionProvider";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import HeaderTitle from "../Headers/HeaderTitle";
import Footer from "@/app/components/Footers/Footer";

// import { Nanum_Gothic } from "next/font/google";

// const nanum_gothic = Nanum_Gothic({
//   subsets: ["latin"],
//   weight: ["400", "700", "800"],
//   display: 'swap',
// });

export const metadata = {
  title: "naver social sign-in by next-auth",
  description: "Generated by create next app",
};

export default function JlptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <HeaderTitle title="JLPT 기출문제" />
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full">
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
