import React from "react";

function Header() {
  return (
    <header className=" absolute top-0 left-0  w-full max-w-full   md:max-w-80 md:m-8">
      <div className="flex justify-center items-center h-full w-full">
        <span className="text-4xl font-bold text-white uppercase flex flex-col">
          <span>Bloxroute</span>
          <span>Labs</span>
        </span>
      </div>
    </header>
  );
}

export default Header;
