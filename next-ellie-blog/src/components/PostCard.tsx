"use client";
import { Post } from "@/service/post";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const { path, title, date, description, category } = post;
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/posts/${path}`);
  };

  return (
    <>
      <article
        className="w-fit flex flex-col shadow rounded-lg cursor-pointer"
        onClick={navigateToDetail}
      >
        <Image
          className="rounded-t-lg"
          src={`/images/posts/${path}.png`}
          width={400}
          height={400}
          alt={title}
        />
        <div className="p-2">
          <p className="text-right">{date}</p>
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-bold">{title}</h4>
            <p>{description}</p>
            <span className="bg-lime-300 rounded-2xl pl-1 pr-1">
              {category}
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
