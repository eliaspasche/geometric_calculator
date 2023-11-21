import Image from "next/image";
import logo from "./../../../public/logo.svg";

export const ApplicationLogo = () => {
  return (
    <Image
      alt="Geometric Calculator Logo"
      src={logo}
      className="px-4"
      height={50}
    />
  );
};
