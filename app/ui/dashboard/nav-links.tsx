import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const NavLinks = () => {
  return (
    <>
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
        </>
  )
}

export default NavLinks