import { FaEnvelope, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-10 pb-8">
      <div className="flex justify-center gap-4 items-center pt-4 border-t-2 w-36">
        <a
          href="mailto:lyshine012@gmail.com"
          className="transition-transform duration-500 hover:scale-110 hover:text-green-500 "
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/lyeejj"
          className="transition-transform duration-500 hover:scale-110 hover:text-green-500 "
        >
          <FaGithub size={24} />
        </a>
      </div>
      <div className="font-light mt-2">Copyright © 2024 lyeejj</div>
    </footer>
  );
}
