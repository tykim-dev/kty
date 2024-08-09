"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Navbar from "./components/Navbars/MainNavbar";
import Footer from "./components/Footers/Footer";
import MainBackground from "./components/Images/MainBackground";
import MainBackgroundTitle from "./components/Images/MainBackgroundTitle";
import Link from "next/link";

export default function Home() {

  const { data: session } = useSession();

  return (
    // <div className="min-h-screen bg-blue-gray-50/50">
    //   <div className="p-4 xl:ml-80">
    //   <div className="flex gap-2 ml-auto">
    //     {/* <DashboardPage /> */}
    //     </div>
    //     <div>
    //       {session?.user ? (
    //         <>
    //           <div className="rounded-lg  lg:overflow-visible">
    //             <div className="flex items-center mt-4">
    //                 <Image alt="사진" className="relative inline-block h-24 w-24 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10" src={session.user.image || ""} width={100} height={100} />
    //             </div>
    //           </div>
    //           <p className="text-sky-600"> {session.user.email}</p>
    //           <button onClick={() => signOut()} className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
    //             <span className="relative z-10">Sign Out</span>
    //           </button>
    //         </>
    //       ) : (
    //         // <button className="text-green-600" onClick={() => signIn()}>
    //         //   Sign In
    //         // </button>
    //         <button onClick={() => signIn()} className=" flex shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
    //           <svg className="inline-block h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //               <path fillRule="evenodd" d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"/></svg>
    //           <span>Sign In</span>
    //         </button>
    //       )}
    //       </div>
    //     <div className="text-blue-gray-600">
    //     https://github.com/creativetimofficial/notus-nextjs
    //     </div>
    //   </div>
    // </div>
    <>
      <Navbar />
      
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          // style={{
          //   backgroundImage:
          //     `url('${backgroundImg}')`,
          // }}
        >
          <MainBackground />
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <MainBackgroundTitle />
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <Link scroll={false} href={'/levelUp'} className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h6 className="text-xl font-semibold">레벨업<br/>(LEVEL UP)</h6>
                  {/* <p className="mt-2 mb-4 text-blueGray-500">
                    과목별 문제를 테스트, 채점기능을 제공한다.
                  </p> */}
                </div>
              </div>
            </Link>

            <Link scroll={false} href={'/jlpt'} className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-list-ol"></i>
                  </div>
                  <h6 className="text-xl font-semibold">JLPT<br/>(2023~2010)</h6>
                  {/* <p className="mt-2 mb-4 text-blueGray-500">
                    과목별 기출문제를 테스트, 채점기능을 제공한다.
                  </p> */}
                </div>
              </div>
            </Link>

            <Link scroll={false} href={'/word/jlpt'} className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-spell-check"></i>
                  </div>
                  <h6 className="text-xl font-semibold">단어<br/>単語 | WORD</h6>
                  {/* <p className="mt-2 mb-4 text-blueGray-500">
                    등급별, 품사별 단어 외우기 학습을 할수있다.
                  </p> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}