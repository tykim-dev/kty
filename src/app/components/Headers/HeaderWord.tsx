import React from "react";

// components

import CardStats from "@/app/components/Cards/CardStats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-4 pb-4 pt-4">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <h3 className="text-white text-sm uppercase hidden lg:inline-block font-semibold">단어외우기</h3>
            {/* Form */}
            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              {/* <UserDropdown /> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
