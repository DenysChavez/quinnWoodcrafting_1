"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = ({ onLinkClick }: any) => {

    const handleLinkClick = () => {
        if (onLinkClick) {
          onLinkClick();
        }
      };

  const pathname = usePathname();
  return (
    <>
      {NAV_LINKS.map((link) => (
        <li key={link.key} onClick={handleLinkClick} className={clsx(
          `regular-24 odd:text-white even:text-gold-10 flexCenter cursor-pointer pb-1.5 transition-all hover:text-shadow-custom`,
          {
            "text-shadow-custom": pathname === link.href,
          }
        )}>
          <Link
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
