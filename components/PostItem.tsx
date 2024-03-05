import Link from "next/link";

const PostItem = () => {
  return (
    <Link href="/blog">
      <article className="w-full my-8 hover:-translate-x-1 ">
        <div className="text-xs text-gray-400">2024.03.05</div>
        <div className="font-bold text-2xl mt-2 hover:text-green-300">
          ⭐️ 게시물 제목입니다.
        </div>
        <div className="text-gray-600 text-lg mt-2">게시물 설명입니다.</div>
      </article>
    </Link>
  );
};

export default PostItem;
