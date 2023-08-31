"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
// import { Routes, Route } from "react-router-dom";
// import { Cog6ToothIcon } from "@heroicons/react/24/solid";
// import { IconButton } from "@material-tailwind/react";
// import routes from "@/routes";
// import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import SideNav from "@/app/widgets/layout/sidenav";

export default function Home() {

  const { data: session } = useSession();

  // const [controller, dispatch] = useMaterialTailwindController();
  // const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <SideNav
        // routes={routes}
        // brandImg={
        //   sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        // }
      />
      <div className="p-4 xl:ml-80">
      <div className="flex gap-2 ml-auto">
          {session?.user ? (
            <>
              <img
                className="w-8 h-8 rounded-full"
                src={session.user.image || ""}
              />{session.user.name || ""}
              <p className="text-sky-600"> {session.user.email}</p>
              <button className="text-red-500" onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <button className="text-green-600" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
        <div className="text-blue-gray-600">
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}