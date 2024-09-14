import { Link } from "@remix-run/react";
import { navLinks } from "~/lib/data";
import { ModeToggle } from "./mode-toggle";
import { useMenuStore } from "~/store/use-menu-store";
import { MobileNav } from "./mobile-nav";
export const Header = () => {
  const menustore = useMenuStore();
  return (
    <div className="h-20 flex justify-between items-center ">
      <div>Blog</div>
      <div className="flex gap-10">
        <ModeToggle />
        {/* mobile nav  */}
        <MobileNav />
        <div className="hidden md:flex gap-5 items-center justify-between">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
