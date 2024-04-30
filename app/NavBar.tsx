"use client";

import Link from "next/link";

import { useState } from "react";
import { TfiFlickrAlt } from "react-icons/tfi";

const NavBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput.trim() !== "") {
      window.location.href = `/feeds/${searchInput}`;
    }
  };
  const links = [
    { lable: "You", href: "/feeds/cat" },
    { lable: "Explore", href: "/feeds/nature" },
    { lable: "Prints", href: "/feeds/graphity" },
    { lable: "Get Pro", href: "/feeds/dslr" },
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

      <input
        type="text"
        placeholder="Search..."
        className=" bg-neutral-300 px-3 py-1 rounded-md "
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleSearch}
      />
    </nav>
  );
};

export default NavBar;
