export interface ImageObject {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}

export interface VideoObject {
  id: number;
  url: string;
  videos: [
    {
      id: number;
      width: number;
      height: number;
      url: string;
    },
    video_files: [
      {
        link: string;
      }
    ]
  ];
}
