"use client";
import { FC, useState } from "react";
import { TypeNavbar } from "@/helpers/Type/type-navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar: FC<TypeNavbar> = (props) => {
  const pathname = usePathname();
  const [selectedNav, setSelectedNav] = useState("Post");
  const style = (path: string) => {
    console.log(path);
    return pathname === path ? "font-bold underline" : "";
  };
  console.log(pathname);
  return (
    <div className="gap-5 flex justify-around px-2.5 py-2.5 w-full ">
      {props.menu.map((e) => (
        <div key={e} className="focus:font-bold hover:font-bold hover:text-blue-500">
          {e === "Post" ? (
            <Link className={style("/")} href={"/"}>
              {e}
            </Link>
          ) : (
            <Link
              className={style(`/${e.toLowerCase()}`)}
              href={`/${e.toLowerCase()}`}
            >
              {e}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
