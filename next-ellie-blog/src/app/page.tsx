import Avatar from "@/components/Avatar";
import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPost from "@/components/FeaturedPost";
import { getFeaturedPosts } from "@/service/post";

export default async function Home() {
  const data = await getFeaturedPosts();
  return (
    <section className="pl-16 pr-16">
      <Avatar />
      <FeaturedPost />
      <CarouselPosts />
    </section>
  );
}
