import { nav } from "@/data/nav";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center gap-4 font-extralight">
      {nav.map((item) => (
        <Link
          href={item.location}
          key={item.title}
          className="hover:font-medium transition-all"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
