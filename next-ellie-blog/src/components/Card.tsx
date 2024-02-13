"use client";
import { Post } from "@/app/page";
import Image from "next/image";

interface Props {
  posts: Post;
}

export default function FeaturedPosts({ posts }: Props) {
  const { path, title, date, description, category } = posts;
  return (
    <>
      <div className="w-fit flex flex-col shadow rounded-lg">
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
            <p className="bg-lime-300 rounded-2xl pl-1 pr-1">{category}</p>
          </div>
        </div>
      </div>
    </>
  );
}
