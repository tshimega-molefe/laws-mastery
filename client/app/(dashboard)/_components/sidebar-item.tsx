"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-muted-foreground text-sm font-[500] pl-6 transition-all ease-out hover:text-muted-foreground hover:bg-muted h-12 rounded-md",
        isActive &&
          "text-primary-foreground dark:text-secondary-foreground bg-primary/60 hover:bg-primary/50 hover:text-primary-foreground"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={18}
          className={cn(
            "text-muted-foreground",
            isActive && "text-primary-foreground dark:text-secondary-foreground"
          )}
        />
        {label}
      </div>
      {/* <div
        className={cn(
          "ml-auto opacity-0 border border-primary rounded-r-md h-full transition-all ease-out",
          isActive && "opacity-100"
        )}
      /> */}
    </button>
  );
};
