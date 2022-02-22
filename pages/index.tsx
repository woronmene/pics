import { ImageObject } from "../typings";
import styles from "./Index.module.scss";
import { createClient } from "pexels";

import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";

interface Props {
  images: [ImageObject];
}

export default function Home({ images }: Props) {
  console.log(images);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <ImageGallery data={images} />
    </div>
  );
}

export async function getServerSideProps() {
  const client = createClient(`${process.env.API_KEY}`);

  try {
    const images = await client.photos.curated({ per_page: 30 });
    return { props: { images } };
  } catch (error) {
    console.log(error);
  }
}
