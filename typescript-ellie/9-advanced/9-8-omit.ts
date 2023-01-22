{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  // pick을 써서 원하는것만 쏙 가져올 수 있다.
  // Omit은 원하는것을  쏙 뺄 수 있다.
  // 재밌는 건 객체에 없는것도 뺄 수 있다.
  function getVideoMetadata(id: string): Omit<Video, 'url' | 'data'> {
    return {
      id: 'id',
      title: 'title'
    }
  }

    type VideoMetadata = Omit<Video, 'url' | 'data'>
    function getVideoMetadata(id: string): VideoMetadata {
      return {
        id: 'id',
        title: 'title'
      }
    }
}