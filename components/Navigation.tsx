import { nav } from "@/data/nav";
import Link from "next/link";

interface INavProps {
  type?: "toggle" | "navbar";
  handleToggle?: () => void;
}

const Navigation = ({ type = "navbar", handleToggle }: INavProps) => {
  return (
    <nav
      className={
        type === "navbar"
          ? "md:flex hidden items-center gap-4 font-extralight"
          : "absolute top-12 left-0 w-screen flex flex-col gap-2 px-4 pt-2 pb-4 font-extralight rounded-b-xl bg-gray-100 md:hidden dark:text-black"
      }
    >
      {nav.map((item) => (
        <Link
          href={item.location}
          key={item.title}
          className={
            type === "navbar"
              ? "hover:font-medium transition-all"
              : "hover:font-medium transition-all hover:bg-green-300 rounded-md px-2 py-1"
          }
          onClick={handleToggle}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
