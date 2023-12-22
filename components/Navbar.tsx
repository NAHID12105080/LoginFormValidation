import Link from "next/link";
import React from "react";

import { Gem } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full left-0 top-0">
      <div className="container items-center justify-between flex">
        <Link href="/">
          <Gem />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
