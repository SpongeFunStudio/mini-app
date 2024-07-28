// components/BottomNav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGamepad,
  FaTrophy,
  FaTasks,
  FaUserFriends,
  FaUser,
} from "react-icons/fa";
import clsx from "clsx";

const links = [
  { name: "Game", href: "/game", icon: FaGamepad },
  { name: "Rank", href: "/rank", icon: FaTrophy },
  { name: "Task", href: "/task", icon: FaTasks },
  { name: "Invite", href: "/invite", icon: FaUserFriends },
  { name: "Mine", href: "/mine", icon: FaUser },
];

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-around p-2 w-full shadow-lg">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-col items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <IconComponent className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
