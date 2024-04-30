"use client";

import Link from "next/link";
import { TfiFlickrAlt } from "react-icons/tfi";

const NavBar = () => {
  const links = [
    { lable: "You", href: "/" },
    { lable: "Explore", href: "/" },
    { lable: "Prints", href: "/" },
    { lable: "Get Pro", href: "/" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center bg-black">
      <Link href="/">
        <TfiFlickrAlt color="white" />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            key={link.href}
            className={" text-white hover:text-zinc-400 transition-colors"}
            href={link.href}
          >
            {link.lable}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
