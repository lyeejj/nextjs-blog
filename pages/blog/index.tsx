import { InferGetStaticPropsType } from "next";
import { allPosts } from "@/.contentlayer/generated";
import PostItem from "../../components/PostItem";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mt-10 flex flex-col">
      {posts.map((post) => (
        <PostItem key={post._id} {...post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  );

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
