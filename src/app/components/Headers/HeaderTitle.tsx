import React from "react";

// components

type HeaderTitleProps = {
  title?: string,
}

export default function HeaderTitle(props: HeaderTitleProps) {
  const {title} = props;

  return (
    <>
      {/* Header */}
      {/* <div className="relative bg-blueGray-800 md:pt-20 pb-20 p-4">
          <div></div>
          <h3 className="text-white text-sm uppercase hidden lg:inline-block font-semibold">{title}</h3>
      </div> */}
      <header>
        <nav className="bg-blueGray-800 sm:py-4 p-10">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
                <span className="text-white text-sm uppercase lg:inline-block font-semibold">{title}</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
