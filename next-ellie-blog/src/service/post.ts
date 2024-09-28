import { readFile } from "fs";
import { promises as fs } from "fs";

import path from "path";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export const getFeaturedPosts = async (): Promise<Post[]> => {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
};

export const getNonFeaturedPost = async (): Promise<Post[]> => {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
};

export const getAllPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "src/data", "posts.json");
  return fs
    .readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.data > b.data ? -1 : 1)));
};
