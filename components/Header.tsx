import Head from "next/head";
import Navigation from "./Navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MdMenu,
  MdClose,
  MdOutlineLightMode,
  MdNightlight,
} from "react-icons/md";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = () => {
    setToggleOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>yoonlog</title>
      </Head>
      <header className="w-full sticky top-0 left-0 z-10 px-5 bg-white dark:bg-[#2d2d2d] h-12 max-w-3xl my-1">
        <div className="w-full h-12 flex items-center justify-between">
          <div className="flex flex-row items-center">
            <Link href="/" className="mx-2 font-extralight text-lg">
              YOONLOG
            </Link>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? (
                <MdOutlineLightMode size={24} />
              ) : (
                <MdNightlight size={24} color="white" />
              )}
            </button>
            <Navigation />
            <button onClick={handleToggle} className="md:hidden w-10 relative">
              {!toggleOpen ? <MdMenu size={24} /> : <MdClose size={24} />}
            </button>
          </div>
        </div>
        {toggleOpen && <Navigation type="toggle" handleToggle={handleToggle} />}
      </header>
    </>
  );
};

export default Header;
