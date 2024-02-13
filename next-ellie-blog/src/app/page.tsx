"use client";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import Posts from "@/data/posts.json";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const data: Post[] = Posts;
    setPosts(data);
  }, []);

  return (
    <div className="pl-16 pr-16">
      <Avatar />
      <h3 className="font-bold pb-10">Featured Posts</h3>
      <div className="flex flex-wrap gap-5 justify-center">
        {posts.map((post, idx) => (
          <Card posts={post} key={idx} />
        ))}
      </div>
    </div>
  );
}
