import React from "react";
import styles from "./Gallery.module.scss";
import Masonry from "react-masonry-css";
import { ImageObject } from "../../typings";
const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  1000: 2,
  500: 1,
};

interface Props {
  data: [ImageObject];
}

function ImageGallery({ data }: Props) {
  return (
    <div className={styles.gallery}>
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {data.photos.map((image) => (
          <img src={image.src.large} alt="" key={image.src.medium} />
        ))}
      </Masonry>
    </div>
  );
}

export default ImageGallery;
