import { useState } from "react";
import ReactMarkdown from "react-markdown";

// components
import VisibilityBtn from "./VisibilityBtn";

// styles
import styles from "../styles/TextBlock.module.css";

const TextBlock = ({ data = [], color = "dark", locale }) => {
  const [hidden, setHidden] = useState(true);

  const isVisible = () => {
    setHidden(!hidden);
  };

  return (
    <>
      {data.length < 1 ? (
        <p
          className={
            (color = "dark"
              ? styles.textInformationDark
              : styles.textInformationLight)
          }
        >
          Kein Text vorhanden...
        </p>
      ) : (
        <article
          className={`${styles.textBlockContainer} ${
            color === "dark" ? styles.dark : styles.light
          }`}
        >
          <ReactMarkdown>
            {locale === "fr" ? data[0].text_block_fr : data[0].text_block_de}
          </ReactMarkdown>
          {data.length > 1 && (
            <div
              className={`${styles.isVisible} ${
                hidden ? styles.no : styles.yes
              }`}
            >
              {data.slice(1).map((text, i) => {
                return (
                  <ReactMarkdown key={i}>
                    {locale === "fr" ? text.text_block_fr : text.text_block_de}
                  </ReactMarkdown>
                );
              })}
            </div>
          )}
          <VisibilityBtn
            isVisible={isVisible}
            hidden={hidden}
            color={color}
            locale={locale}
          />
        </article>
      )}
    </>
  );
};

export default TextBlock;
