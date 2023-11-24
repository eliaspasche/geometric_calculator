import { PATH_ABOUT } from "@/app/routes";

export const ApplicationFooter = () => {
  return (
    <footer className="bg-primary shadow bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between py-10">
        <span className="text-sm text-white sm:text-center ">
          © 2023, Elias Pasche
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a href={PATH_ABOUT} className="hover:underline me-4 md:me-6 ">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
