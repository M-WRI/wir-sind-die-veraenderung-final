import Image from "next/image";
import ReactMarkdown from "react-markdown";

// styles
import styles from "../styles/Protagonist.module.css";

const Protagonist = ({ data, locale }) => {
  return (
    <>
      {data.map((protagonist, i) => {
        return (
          <div key={i}>
            <div className={styles.imageContainer}>
              <img src={`/${protagonist.image}`} alt={protagonist.name} />
            </div>
            <h3 className={styles.name}>{protagonist.name}</h3>
            <ReactMarkdown key={i} className={styles.bio}>
              {locale === "fr"
                ? protagonist.the_protagonists.bio_fr
                : protagonist.the_protagonists.bio_de}
            </ReactMarkdown>
          </div>
        );
      })}
    </>
  );
};

export default Protagonist;
