import React from "react";
import styles from "./Gallery.module.scss";
import Masonry from "react-masonry-css";
import { VideoObject } from "../../typings";
import Link from "next/link";
const breakpointColumnsObj = {
  default: 3,

  1200: 2,
  1000: 2,
  500: 1,
};

interface Props {
  data: [VideoObject];
}

function VideoGallery({ data }: Props) {
  return (
    <div className={styles.gallery}>
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {data.videos.map((video: any) => (
          <Link key={video.id} href="/3">
            <video src={video.video_files[0].link} />
          </Link>
        ))}
      </Masonry>
    </div>
  );
}

export default VideoGallery;
