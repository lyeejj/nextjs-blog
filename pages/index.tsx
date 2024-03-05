import Image from "next/image";
import RecentPosts from "@/components/RecentPosts";

const Home = () => {
  return (
    <div className="my-2 w-full">
      <div className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/bgImg.jpg"
          alt="대표 이미지"
          fill
          objectFit="cover"
          className="rounded-3xl"
        />
        <span className="absolute top-20 left-8 font-extrabold italic text-white text-lg md:text-3xl w-full drop-shadow-lg">
          {`Welcome to my blog,`}
          <br />
          {`I'm lyeejj✨`}
        </span>
      </div>
      <RecentPosts />
    </div>
  );
};

export default Home;
