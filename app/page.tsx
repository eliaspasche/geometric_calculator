"use client";
import { usePathname, useRouter } from "next/navigation";
import { useNavLinks } from "@/app/routes";

export default function Home() {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = useNavLinks();

  if (pathName === "/") {
    router.push(navLinks[0].path);
  }

  return <div></div>;
}
