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
import { ApplicationLogo } from "./Logo";
import { useNavLinks } from "@/app/routes";
import { ThemeSwitch } from "@/app/components/ThemeSwitch";

export const NavigationHeader = () => {
  const pathname = usePathname();
  const navLinks = useNavLinks();

  return (
    <Navbar className="px-2 py-1 md:py-4 md:border-b w-full">
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <ApplicationLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {navLinks.map((item) => (
          <NavbarItem key={item.key} isActive={pathname.startsWith(item.path)}>
            <Link color="foreground" href={item.path} className="text-lg">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-8">
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
