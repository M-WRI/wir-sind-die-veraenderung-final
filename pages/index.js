import Link from "next/link";
import ReactPlayer from "react-player";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Script from "next/script";

// styles
import styles from "../styles/Main.module.css";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TextBlock from "../components/TextBlock";
// import InfoCard from "../components/InfoCard";
// import Protagonist from "../components/Protagonist";

export default function Home({ content }) {
  const {
    the_movie,
    the_premiere,
    the_project,
    the_protagonists,
    image_gallery,
    footer,
  } = content.attributes;

  const router = useRouter();

  const { locale } = router;

  const [lan, setLan] = useState("de");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    setLan(locale);
  }, [locale]);

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <main className={styles.mainContainer} id="home">
        <header className={styles.headerContainer}>
          {lan === "fr" ? (
            <h1 className={styles.mainHeadline}>
              <span>Nous Sommes</span> <span>Le Changement</span>
            </h1>
          ) : (
            <h1 className={styles.mainHeadline}>
              <span>Wir sind die</span> <span>Veränderung</span>
            </h1>
          )}

          <div className={styles.titleImageContainer}>
            <img src="/images/title-image.jpg" alt="Wir sind die Veränderung" />
          </div>
          <Link
            href={the_premiere.info_card.premiere_title.zoom_link}
            passHref={true}
            target="blank"
          >
            <div className={styles.premiereBtn}>
              <h3 className={styles.buttonHeadline}>
                {lan === "fr"
                  ? the_premiere.info_card.premiere_title.title_fr
                  : the_premiere.info_card.premiere_title.title_de}
              </h3>
              <h4 className={styles.buttonSubHead}>
                {lan === "fr"
                  ? the_premiere.info_card.premiere_title.zoom_link_title_fr
                  : the_premiere.info_card.premiere_title.zoom_link_title_de}
              </h4>
            </div>
          </Link>
        </header>
        {/* =========== */}
        {/* SECTION TWO */}
        {/* =========== */}
        <section className={styles.sectionTwoContainer} id="der-film">
          <h2 className={`${styles.sectionHeadline} ${styles.white}`}>
            {lan === "fr" ? "Le Film" : "Der Film"}
          </h2>
          <div className={styles.videoContainer}>
            {/* <ReactPlayer
              url={the_movie.movie_trailer}
              width={"100%"}
              height={"auto"}
              controls={true}
            /> */}
          </div>
          <TextBlock
            data={the_movie.section_description}
            color="light"
            locale={lan}
          />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/${"home"}.md`);
  return { props: { content: content.default } };
}
