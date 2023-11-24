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
import { ApplicationLogo } from "./logo";
import { useNavLinks } from "@/app/routes";

export const NavigationHeader = () => {
  const pathname = usePathname();
  const navLinks = useNavLinks();

  return (
    <Navbar className="px-8 py-5 border-b w-full">
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <ApplicationLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12">
        {navLinks.map((item) => (
          <NavbarItem key={item.key} isActive={pathname.startsWith(item.path)}>
            <Link color="foreground" href={item.path} className="text-lg">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="pt-12">
        {navLinks.map((item) => (
          <NavbarMenuItem
            className="pt-4"
            key={item.key}
            isActive={pathname.startsWith(item.path)}
          >
            <Link
              className="w-full"
              color="foreground"
              href={item.path}
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
