import styles from "./Index.module.scss";

import Header from "../components/Header";
import { createClient } from "pexels";
import { VideoObject } from "../typings";
import VideoGallery from "../components/VideoGallery";

interface Props {
  videos: [VideoObject];
}

export default function VideoPage({ videos }: Props) {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <VideoGallery data={videos} />
    </div>
  );
}

export async function getServerSideProps() {
  const client = createClient(`${process.env.API_KEY}`);

  try {
    const videos = await client.videos.popular({ per_page: 4 });
    return { props: { videos } };
  } catch (error) {
    console.log(error);
  }
}
