"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoWhite from "@/public/logo_white.svg";
import { Link } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ApplicationLogo = () => {
  const [mounted, setMounted] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const height = 50;
  const className = "px-4";

  if (!mounted) return null;

  return (
    <Link href="/">
      <div className="hover:cursor-pointer flex justify-center items-center">
        <Image
          alt="Geometric Calculator Logo"
          src={theme.resolvedTheme === "dark" ? logoWhite : logo}
          priority
          className={className}
          height={height}
        />
      </div>
    </Link>
  );
};
