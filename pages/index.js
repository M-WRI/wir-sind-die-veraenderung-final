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
import InfoCard from "../components/InfoCard";
import Protagonist from "../components/Protagonist";

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
      <NavBar locale={lan} setLan={setLan} />
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
            <ReactPlayer
              url={the_movie.movie_trailer}
              width={"100%"}
              height={"auto"}
              controls={true}
            />
          </div>
          <TextBlock
            data={the_movie.section_description}
            color="light"
            locale={lan}
          />
        </section>
        {/* ============= */}
        {/* SECTION THREE */}
        {/* ============= */}
        <section className={styles.sectionThreeContainer} id="die-premiere">
          <h2 className={`${styles.sectionHeadline}`}>
            {lan === "fr" ? "La Première" : "Die Premiere"}
          </h2>
          <div className={styles.sectionGrid}>
            <div>
              <TextBlock
                data={the_premiere.section_description}
                color="dark"
                locale={lan}
              />
            </div>
            <div>
              <InfoCard data={the_premiere.info_card} locale={lan} />
            </div>
          </div>
        </section>
        {/* ============ */}
        {/* SECTION FOUR */}
        {/* ============ */}
        <section className={styles.sectionFourContainer} id="das-projekt">
          <h2 className={`${styles.sectionHeadline} ${styles.white}`}>
            {lan === "fr" ? "Le Projet" : "Das Projekt"}
          </h2>
          <TextBlock
            data={the_project.section_description}
            color="light"
            locale={lan}
          />
          <div className={styles.supporterContainer}>
            <div className={styles.mainSupporterWrapper}>
              {the_project.supporter.list.slice(0, 2).map((el, i) => (
                <div key={i} className={styles.supporterWrapper}>
                  <Link href={el.supporter_link} passHref={true}>
                    <a>
                      <div className={styles.imageBackground}>
                        <div className={styles.supporterImageContainer}>
                          <img
                            src={`/${el.supporter_logo}`}
                            alt={el.supporter_name}
                          />
                        </div>
                      </div>

                      <div className={styles.supporterName}>
                        {el.supporter_name}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.supporterListContainer}>
              <ul>
                {the_project.supporter.list.slice(2).map((el, i) => (
                  <li key={i} className={styles.supporterListItem}>
                    <Link href={el.supporter_link} passHref={true}>
                      {el.supporter_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* ============ */}
        {/* SECTION FIVE */}
        {/* ============ */}
        <section
          className={styles.sectionFiveContainer}
          id="die-protagonistinnen"
        >
          <h2 className={`${styles.sectionHeadline}`}>
            {lan === "fr" ? "Les Protagonistes" : "Die Protagonistinnen"}
          </h2>
          <div className={styles.sectionFiveGrid}>
            <Protagonist data={the_protagonists.list} locale={lan} />
          </div>
        </section>
        {/* =========== */}
        {/* SECTION SIX */}
        {/* =========== */}
        <section className={styles.sectionSixContainer}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {image_gallery.list.map((image, index) => (
                <div key={index} className="embla__slide">
                  <div className="box">
                    <img src={`/${image.image}`} alt={image.image_name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={lan} data={footer} />
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/${"home"}.md`);
  return { props: { content: content.default } };
}
