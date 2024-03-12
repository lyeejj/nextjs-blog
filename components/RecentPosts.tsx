import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

interface IRecentPostsProps {
  posts: Post[];
}

const RecentPosts = ({ posts }: IRecentPostsProps) => {
  const RECENT_POST_NUM = 5;
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-extrabold">최근 게시물</h1>
      <div className="flex flex-col gap-10 mt-10">
        {posts.slice(0, RECENT_POST_NUM).map((post) => (
          <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`}>
            <div className="font-medium text-xl">{post.title}</div>
            <div className="font-light">{post.description}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
