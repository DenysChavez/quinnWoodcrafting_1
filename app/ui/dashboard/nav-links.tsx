import Link from "next/link";

const NAV_LINKS = [
    { href: '/about', key: 'about_us', label: 'About Us', color: 'text-white' },
    { href: '/products', key: 'products', label: 'Products', color: 'text-gold-10' },
    { href: '/workshops_and_events', key: 'workshops_and_events', label: 'Workshops & Events', color: 'text-white' },
    { href: '/request', key: 'request', label: 'Request', color: 'text-gold-10'},
];

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