import Link from "next/link";
import Image from "next/image";
import { NAV_COLORS, NAV_LINKS } from "@/constants";


const Navbar = () => {
  return (
    <nav className="bg-background-10 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={125} height={82} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={link.key}
            className={`regular-24 ${NAV_COLORS[index % NAV_COLORS.length]} flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold`}
          >
            {link.label}
          </Link>
        ))}
          </ul>

          <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
