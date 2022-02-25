// import Image from "next/image";
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
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import TextBlock from "../components/TextBlock";
// import InfoCard from "../components/InfoCard";
// import Protagonist from "../components/Protagonist";

export default function Home({ content }) {
  console.log(content, "<-----");
  return (
    <>
      {/* READY TO START */}
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <div>INDEX</div>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/${"home"}.md`);
  return { props: { content: content.default } };
}
