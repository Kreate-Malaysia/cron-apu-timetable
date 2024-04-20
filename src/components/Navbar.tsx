"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    useEffect(function scrollCalc() {
        const handleScroll = () => {
            const twentyPercentOfPageHeight = window.innerHeight * 0.2;

      if (window.scrollY > twentyPercentOfPageHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <>
            <header>
                <Image />

            </header>
        </>
    )

}