import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  mkjapanese
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link scroll={false} href={'/levelUp'} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    레벨업(Level up)
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href={'/jlpt'} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    JLPT(2023~2010)
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href={'/word/jlpt'} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                    단어 | 単語 | WORD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
