"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: "500",
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


    const onMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className= {` ${inter.className} w-full mx-0  px-10 py-6 flex  bg-[#131313]`}>
            <div className="flex flex-wrap justify-between w-full px-4 items-center">
                <div className=" pr-2 w-5/12 lg:w-3/12">
                    <Link href={"/"}>
                        <Image
                            src={"/app_logo.png"}
                            alt={"App logo icon"}
                            width={167}
                            height={57}
                            className={""}
                        />
                    </Link>

                </div>
                
                
                <div className="my-2 px-2 w-2/12 lg:hidden flex flex-row">
                    <button className="menu-btn" onClick={onMenuClick}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>

                <div
                    className="w-full lg:w-8/12 hidden lg:block mt-4 lg:mt-0"
                    style={isMenuOpen ? { display: "block" } : {}} 
                >
                    <nav className="lg:text-xl text-lg"  >
                        <ul className="list-none lg:flex  justify-end text-white items-center rounded-2xl bg-[#131313] lg:bg-transparent ">
                            <li
                                className=
                                    "lg:bg-inherit lg:px-0 px-4 w-fit py-3 my-2 lg:my-0  text-center cursor-pointer"
                                
                            >
                                About C.A.T
                            </li>
                            <li
                                className="lg:bg-inherit lg:px-7 px-4 w-fit py-3 my-2 lg:my-0  text-center cursor-pointer">
                                
                                Features
                                
                            </li>
                            <li
                                className="lg:bg-inherit lg:px-0 px-4  w-fit py-3 my-2 lg:my-0  text-center cursor-pointer"
                            >
                                Contact Us
                            </li>                                 
                        </ul>
                    </nav>  
                </div>
            </div>
        </header>
    );
}
