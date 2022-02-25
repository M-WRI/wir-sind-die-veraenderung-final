import Link from "next/link";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

// style
import styles from "../styles/Footer.module.css";

const ContactForm = ({ locale, data }) => {
  return (
    <footer className={styles.footerContainer} id="kontakt">
      <div className={styles.footerWrapper}>
        <div>
          <h2 className={styles.footerHeadline}>
            {locale === "fr" ? "Contact" : "Kontakt"}
          </h2>
          <div className={styles.contactDetails}>
            <div className={styles.detailsContainer}>
              <div className={styles.iconWrapper}>
                <AiOutlineMail />
              </div>
              <span className={styles.socialMedia}>
                <a href={`mailto:${data.email}`}>
                  <span className={styles.socialMedia}>{data.email}</span>
                </a>
              </span>
            </div>

            <div className={styles.detailsContainer}>
              <div className={styles.iconWrapper}>
                <AiOutlineInstagram />
              </div>
              <Link
                href={`https://www.instagram.com/${data.link}/`}
                target="_blank"
                passHref={true}
              >
                <a>
                  <span className={styles.socialMedia}>{data.link}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.footerHeadline}>
            {locale === "fr" ? "Participer" : "Mitmachen"}
          </h2>
          <p className={styles.infoText}>
            {locale === "fr"
              ? data.participate.text_block_fr
              : data.participate.text_block_de}
          </p>
        </div>
      </div>
      <div>
        <ul className={styles.footerLinks}>
          <li style={{ cursor: "pointer !important" }}>Impressum</li>
          <li style={{ cursor: "pointer !important" }}>DSGVO</li>
          <li style={{ cursor: "pointer !important" }}>
            <Link
              href="https://drive.google.com/uc?id=1QqkgmTARfFPutN5BC6irp5R1KvFmnLjo&export=download
"
              passHref={true}
            >
              <a>Presse</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactForm;
