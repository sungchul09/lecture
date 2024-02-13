import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function PostsDetails({ params: { slug } }: Props) {
  return <div>PostsDetails {slug}</div>;
}
