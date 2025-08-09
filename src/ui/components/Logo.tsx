"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import Image from "next/image";

const logoSrc = "https://cdn.prod.website-files.com/6726a50c4999bb6a4ea6b3a3/680bbbb933c0db2dfa9f9e16_Logo_Black.svg";
const logoAlt = "Roman Pie Logo";
const logoWidth = 150; // adjust as needed
const logoHeight = 40; // adjust as needed

export const Logo = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <h1 className="flex items-center font-bold" aria-label="homepage">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          priority
        />
      </h1>
    );
  }

  return (
    <div className="flex items-center font-bold">
      <LinkWithChannel aria-label="homepage" href="/">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
        />
      </LinkWithChannel>
    </div>
  );
};
