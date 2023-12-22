"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";
import { auth } from "@clerk/nextjs";

const welcomeRoutes = [
  {
    icon: Compass,
    label: "Explore",
    href: "/welcome",
  },
];

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const creatorRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/creator/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/creator/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isWelcomePage = pathname?.includes("/welcome");

  const isCreatorPage = pathname?.includes("/creator");

  let routes;

  if (isWelcomePage) {
    routes = welcomeRoutes;
  } else {
    routes = isCreatorPage ? creatorRoutes : guestRoutes;
  }

  return (
    <div className="flex flex-col w-full px-3 gap-y-2">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
