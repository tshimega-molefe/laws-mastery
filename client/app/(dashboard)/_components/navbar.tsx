import { NavbarRoutes } from "@/components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full bg-background flex items-center shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
