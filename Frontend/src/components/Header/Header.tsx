import { TbMenu2 } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState } from "react";

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/">
                    <h1 className="font-custom-font text-[300%]">RealState</h1>
                </Link>

                <TbMenu2
                    className="block text-2xl md:hidden"
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                />

                <Navbar openMobileMenu={openMobileMenu} />

                <div className="flex items-center gap-2 md:gap-5">
                    <Link
                        href="Teléfono:605889021"
                        className="flex items-center gap-4 cursor-pointer"
                    >
                        <BsTelephone />
                        <span className="hidden md:block">+34 605889021</span>
                    </Link>
                    <Link
                        href="/login"
                        className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
