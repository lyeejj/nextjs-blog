import Link from "next/link";

const RecentPosts = () => {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-extrabold">최근 게시물</h1>
      <div className="flex flex-col gap-10 mt-10">
        <Link href="/">
          <div className="font-medium text-xl">블로그 게시물 제목입니다.</div>
          <div className="font-light">설명입니다.</div>
        </Link>
        <Link href="/">
          <div className="font-medium text-xl">블로그 게시물 제목입니다.2</div>
          <div className="font-light">설명입니다.2</div>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
