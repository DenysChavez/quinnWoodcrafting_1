"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-background-10 fixed top-0 w-full z-30">
      <nav className="bg-background-10 flexBetween max-container padding-container relative py-1 w-full">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={125} height={82} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={link.key}>
              <Link
                className={`regular-24 ${link.color} flexCenter cursor-pointer pb-1.5 transition-all hover:text-shadow-custom`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
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
            {NAV_LINKS.map((link, index) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`regular-24 ${link.color} flexCenter cursor-pointer pb-1.5 transition-all hover:text-shadow-custom hover:font-bold`}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
