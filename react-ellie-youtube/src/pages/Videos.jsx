import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword],
    async () => fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items),
  );
  return (
    <>
      <div>
        {keyword ? `🔎${keyword}` : '🔥'}
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
      <ul>
        {videos.map((video) => (<VideoCard key={video.id} video={video} />))}
      </ul>
      )}
    </>
  );
}
