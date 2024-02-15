import PostCard from "@/components/PostCard";
import { getFeaturedPosts } from "@/service/post";

export default async function PostGrid() {
  const posts = await getFeaturedPosts();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {posts.map((post, idx) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
