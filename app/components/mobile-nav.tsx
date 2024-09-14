import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from "~/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useMenuStore } from "~/store/use-menu-store";
import { navLinks } from "~/lib/data";
import { useNavigate } from "@remix-run/react";
export const MobileNav = () => {
  const menuStore = useMenuStore();
  const navigate = useNavigate();
  const onNavigate = (href: string) => {
    navigate(href);
    menuStore.onClose();
  };
  return (
    <div className="block md:hidden">
      <Sheet open={menuStore.isOpen} onOpenChange={menuStore.onClose}>
        <Button variant="outline" onClick={menuStore.onOpen}>
          <MenuIcon className="size-4" />
        </Button>
        <SheetContent>
          <SheetHeader className="text-start">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="my-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Button
                onClick={() => onNavigate(link.href)}
                variant="ghost"
                key={link.id}
                className="flex justify-start "
              >
                {link.title}
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
