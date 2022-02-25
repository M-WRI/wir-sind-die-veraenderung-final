import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import styles from "../styles/Navbar.module.css";

const dataDe = [
  { id: 1, title: "Home", slug: "home" },
  { id: 2, title: "Der Film", slug: "der-film" },
  { id: 3, title: "Die Premiere", slug: "die-premiere" },
  { id: 4, title: "Das Projekt", slug: "das-projekt" },
  { id: 5, title: "Die Protagonistinnen", slug: "die-protagonistinnen" },
  { id: 6, title: "Kontakt", slug: "kontakt" },
];

const dataFr = [
  { id: 1, title: "Home", slug: "home" },
  { id: 2, title: "Le Film", slug: "der-film" },
  { id: 3, title: "La Première", slug: "die-premiere" },
  { id: 4, title: "Le Projet", slug: "das-projekt" },
  { id: 5, title: "Les Protagonistes", slug: "die-protagonistinnen" },
  { id: 6, title: "Contact", slug: "kontakt" },
];

const NavBar = ({ locale, setLan }) => {
  const [open, setOpen] = useState(false);

  const navHandeler = () => {
    setOpen(!open);
  };

  return (
    <>
      {locale === "fr" ? (
        <>
          <nav className={styles.navBarContainer}>
            <ul className={styles.navBarItems}>
              {dataFr.map((item) => (
                <li key={item.id} className={styles.navBarItem}>
                  <Link href={`#${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <ul className={styles.navBarItems}>
              <li className={styles.navBarItemLan} onClick={() => setLan("de")}>
                De {locale === "de" && <div className={styles.active}></div>}
              </li>
              <li className={styles.navBarItemLan} onClick={() => setLan("fr")}>
                Fr {locale === "fr" && <div className={styles.active}></div>}
              </li>
            </ul>
          </nav>

          {/* MOBILE */}
          <div className={styles.hamburgerContainer}>
            <ul className={styles.navBarItems}>
              <li className={styles.navBarItemLan} onClick={() => setLan("de")}>
                De {locale === "de" && <div className={styles.active}></div>}
              </li>
              <li className={styles.navBarItemLan} onClick={() => setLan("fr")}>
                Fr {locale === "fr" && <div className={styles.active}></div>}
              </li>
            </ul>

            <div className={styles.mobHamburger}>
              <div onClick={navHandeler} className={styles.hamburgerIcon}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </div>
          </div>

          <nav
            className={styles.mobNavBarContainer}
            style={{ opacity: open ? 1 : 0 }}
          >
            <div className={styles.listWrapper}>
              <ul className={styles.mobNavBarItems}>
                {dataFr.map((item) => (
                  <li
                    key={item.id}
                    className={styles.mobNavBarItem}
                    onClick={navHandeler}
                  >
                    <Link href={`#${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className={styles.navBarContainer}>
            <ul className={styles.navBarItems}>
              {dataDe.map((item) => (
                <li key={item.id} className={styles.navBarItem}>
                  <Link href={`#${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <ul className={styles.navBarItems}>
              <li className={styles.navBarItemLan} onClick={() => setLan("de")}>
                De {locale === "de" && <div className={styles.active}></div>}
              </li>
              <li className={styles.navBarItemLan} onClick={() => setLan("fr")}>
                Fr {locale === "fr" && <div className={styles.active}></div>}
              </li>
            </ul>
          </nav>

          {/* MOBILE */}
          <div className={styles.hamburgerContainer}>
            <ul className={styles.navBarItems}>
              <li className={styles.navBarItemLan} onClick={() => setLan("de")}>
                De {locale === "de" && <div className={styles.active}></div>}
              </li>
              <li className={styles.navBarItemLan} onClick={() => setLan("fr")}>
                Fr {locale === "fr" && <div className={styles.active}></div>}
              </li>
            </ul>

            <div className={styles.mobHamburger}>
              <div onClick={navHandeler} className={styles.hamburgerIcon}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </div>
          </div>

          <nav
            className={styles.mobNavBarContainer}
            style={{
              opacity: open ? 1 : 0,
              visibility: open ? "visible" : "hidden",
            }}
          >
            <div className={styles.listWrapper}>
              <ul className={styles.mobNavBarItems}>
                {dataDe.map((item) => (
                  <li
                    key={item.id}
                    className={styles.mobNavBarItem}
                    onClick={navHandeler}
                  >
                    <Link href={`#${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
