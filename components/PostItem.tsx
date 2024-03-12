import Link from "next/link";

interface IPostItemProps {
  title: string;
  description: string;
  createdAt: string;
}

const PostItem = ({ createdAt, title, description }: IPostItemProps) => {
  return (
    <Link href="/blog">
      <article className="w-full my-8 hover:-translate-x-1 ">
        <div className="text-xs text-gray-400">{createdAt}</div>
        <div className="font-bold text-2xl mt-2 hover:text-green-300">
          {title}
        </div>
        <div className="text-gray-600 text-lg mt-2">{description}</div>
      </article>
    </Link>
  );
};

export default PostItem;
