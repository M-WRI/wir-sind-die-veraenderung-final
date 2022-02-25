import Link from "next/link";

// styles
import styles from "../styles/InfoCard.module.css";

const InfoCard = ({ data, locale }) => {
  const { schedule } = data;
  return (
    <Link href={data.premiere_title.zoom_link} passHref>
      <div className={styles.infoCardContainer}>
        <h3 className={styles.infoCardHeadline}>
          {locale === "fr"
            ? data.premiere_title.title_fr
            : data.premiere_title.title_de}
        </h3>
        <span className={styles.infoCardSubHead}>
          {locale === "fr"
            ? data.premiere_title.zoom_link_title_fr
            : data.premiere_title.zoom_link_title_de}
        </span>
        <div className={styles.infoCardSchedule}>
          <h4 className={styles.infoCardScheduleHead}>Ablauf</h4>
          <ul className={styles.infoCardScheduleList}>
            {schedule.map((el, i) => (
              <li className={styles.listItem} key={i}>
                <strong>{el.time}</strong> – {el.procedure}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
