import Image from "next/image";
import logo from "./../../../public/logo.svg";
import { Link } from "@nextui-org/react";

export const ApplicationLogo = () => {
  return (
    <Link href="/">
      <div className="hover:cursor-pointer flex justify-center items-center">
        <Image
          alt="Geometric Calculator Logo"
          src={logo}
          priority
          className="px-4"
          height={50}
        />
      </div>
    </Link>
  );
};
