"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ApplicationLogo } from "./logo";

export const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { key: "shapes", label: "Shapes", link: "/shapes" },
    { key: "figures", label: "Solid Figures", link: "/figures" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="px-8 py-5 border-b w-full"
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <ApplicationLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12">
        {menuItems.map((item) => (
          <NavbarItem key={item.key} isActive={pathname.startsWith(item.link)}>
            <Link color="foreground" href={item.link} className="text-lg">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={item.key}
            isActive={pathname.startsWith(item.link)}
          >
            <Link
              className="w-full"
              color="foreground"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
