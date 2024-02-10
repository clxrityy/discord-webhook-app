"use client";

import { displayOptions } from "@/config/constants";
import GetUser from "@/hooks/GetUser";
import { useState } from "react";
import Menu from "./Menu";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {

    const user = GetUser();

    const [activeMenu, setActiveMenu] = useState<boolean>();

    if (user) return (
        <div className="absolute top-0 px-4 py-2 w-full z-50">
            <div className="md:hidden">
                <button onClick={() => setActiveMenu(!activeMenu)}>
                    <displayOptions.icons.menu size={30} className="text-white" />
                </button>
            </div>
            <div className="hidden md:flex w-full items-center">
                <Menu />
            </div>
            {activeMenu
                &&
                <Menu activeMenu={activeMenu} />
            }
            <div className="fixed right-0 top-0 px-4 py-2">
                <UserButton />
            </div>
        </div>
    );

}

export default Navbar;