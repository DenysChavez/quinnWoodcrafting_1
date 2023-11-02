import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="regular-24 text-gray-10 whitespace-nowrap tex">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background-10 flexCenter pb-3">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="flex flex-col gap-4 text-gray-10">
                  {columns.links.map((link) => (
                    <Link href={link[1]} key={link[0]}>
                      {link[0]}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}


            <div className="flex flex-col items-center">
              <Link href="/">
                <Image
                  src="logo.svg"
                  alt="logo"
                  width={74}
                  height={29}
                />
              </Link>
              
                <ul className="flex gap-4 text-gray-10 mt-3">
                  {SOCIALS.links.map((link) => (
                    <Link href={link[1]} key={link[0]}>
                      <Image src={link[0]} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              
            </div>
          </div>
        </div>

        <div className="border bg-gold-10" />
        <p className="regular-14 w-full text-center text-gold-10">
          2023 Quinn Woodcrafting | All rights reserved
        </p>
      </div>
    </footer>
  );
};



export default Footer;
