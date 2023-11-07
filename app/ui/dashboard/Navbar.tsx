"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./nav-links";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-background-10 fixed top-0 w-screen z-30">
      <nav className="bg-background-10 flexBetween max-container padding-container relative py-1 w-full">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={125} height={82} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          <NavLinks onLinkClick={closeMobileMenu}/>
        </ul>

        <div className="lg:hidden">
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="hover:text-shadow-custom inline-block cursor-pointer lg:hidden"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-background-10 flex flex-col gap-6 mt-2 p-4 lg:hidden">
            <NavLinks onLinkClick={closeMobileMenu}/>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
