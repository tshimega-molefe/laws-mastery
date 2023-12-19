"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut, Settings, Settings2, Upload, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isCreator } from "@/lib/creator";

import { SearchInput } from "./search-input";
import { ThemeToggle } from "./theme-toggle";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isCreatorPage = pathname?.startsWith("/creator");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto items-center">
        {isCreatorPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isCreator(userId) ? (
          <Link href="/creator/courses">
            <Button size="sm" variant="ghost">
              <Upload className="h-4 w-4 mr-2" />
              Create
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
        {/* <ThemeToggle /> */}
      </div>
    </>
  );
};
