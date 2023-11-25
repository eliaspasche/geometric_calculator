import { PATH_IMPRINT } from "@/app/routes";

export const ApplicationFooter = () => {
  return (
    <footer className="bg-primary shadow bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-6 flex items-center justify-between py-6 md:py-10">
        <span className="text-sm text-white  ">© 2023, Elias Pasche</span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-white">
          <li>
            <a href={PATH_IMPRINT} className="hover:underline ">
              Imprint
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
