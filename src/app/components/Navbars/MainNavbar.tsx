import { Collapse } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const mainNavbarMenuList = [
  {
    name: '레벨업 문제풀이',
    link: '/levelUp',
  },
  {
    name: 'JLPT 기출문제',
    link: '/jlpt',
  },
  {
    name: '단어 외우기',
    link: '/word/jlpt',
  },
];

export default function MainNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const handleClickMenuBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpenNav(!openNav);
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => setOpenNav(false),
    );
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="/">
              모쿠모쿠 일본어
            </a>
            <button onClick={(e) => handleClickMenuBtn(e)} className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div className="flex-col md:flex-row list-none items-center hidden lg:flex">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              {mainNavbarMenuList.map((item: any, idx) => {
                return (
                  <li key={`main-nav-menu-${idx}`} className="nav-item">
                    <Link scroll={false} href={item.link} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <Collapse open={openNav}>
            <div className="p-4 rounded-lg bg-white">
              <ul className="flex flex-col lg:flex-row list-none ml-auto gap-2">
                {mainNavbarMenuList.map((item: any, idx) => {
                  return (
                    <li key={`main-nav-dropdown-menu-${idx}`} className="nav-item">
                      <Link scroll={false} href={item.link} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Collapse>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
