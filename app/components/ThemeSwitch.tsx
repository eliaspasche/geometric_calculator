"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import dark from "@/public/dark.svg";
import light from "@/public/light.svg";
import Image from "next/image";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    resolvedTheme === "light" ? setIsDark(false) : setIsDark(true);
    return () => {};
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <div>
      <Button
        isIconOnly
        onClick={() =>
          resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
        variant={"flat"}
      >
        <Image
          alt="Icon Theme Mode"
          src={isDark === true ? dark : light}
          height={24}
        />
      </Button>
    </div>
  );
}
