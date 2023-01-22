{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data...',
    }
  }

  // id와 title만 써야하는데 VideoMetadata를 모두 가져온다
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: 'id',
      title: 'title'
    }
  }

  // pick을 써서 원하는것만 쏙 가져올 수 있다.
  function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'> {
    return {
      id: 'id',
      title: 'title'
    }
  }

  function getVideoMetadata(id: string): Pick<Video, 'url' | 'data'> {
    return {
      id: 'id',
      title: 'title'
    }
  }


    // pick을 쓴 타입의 내용도 따로 빼는게 좋다
    type VideoMetadata = Pick<Video, 'id' | 'title'>
    function getVideoMetadata(id: string): VideoMetadata {
      return {
        id: 'id',
        title: 'title'
      }
    }
}