import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="w-full flex flex-col items-center m-auto">
      <Header />
      <main className="w-full max-w-3xl px-5">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
