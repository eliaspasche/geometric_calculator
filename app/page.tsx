"use client";

import { usePathname, useRouter } from "next/navigation";
import { useNavLinks } from "@/app/routes";
import { useEffect } from "react";

export default function Home() {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = useNavLinks();

  useEffect(() => {
    if (pathName === "/") {
      router.push(navLinks[0].path);
    }
  }, []);

  return <div></div>;
}
