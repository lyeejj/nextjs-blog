import Head from "next/head";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <title>yoonlog</title>
      </Head>
      <header className="w-full sticky top-0 left-0 z-10 px-5 bg-white h-12 max-w-3xl my-1">
        <div className="w-full h-12 flex items-center justify-between">
          <div className="flex flex-row items-center">
            <Link href="/" className="font-extralight text-lg">
              YOONLOG
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
