"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeSwitch from "./theme-switch";

const navItems = {
  "/": {
    name: "home",
  },
  "/experiences": {
    name: "experiences",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all font-medium hover:text-sky-600 dark:hover:text-sky-400 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <ThemeSwitch />
        </nav>
      </div>
    </aside>
  );
}
