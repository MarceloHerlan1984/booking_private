import React from "react";
import { SideBarDraer } from "./SideBarDraer";
import { AvatarNav } from "./AvatarNav";
import NotifyBtn from "./NotifyBtn";
import BasketItem from "./BasketItem";

function Header() {
  return (
    <header className="sticky top-0 z-10 rounded-md bg-white shadow-sm dark:bg-black ">
      <nav className="p-4 transition-all">
        <div className="mx-8 flex flex-wrap items-center justify-between">
          <div className="flex items-center justify-start">
            <SideBarDraer />
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            <AvatarNav /> <NotifyBtn /> <BasketItem />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
