import Script from "next/script";

export default function Home({ content }) {
  console.log(content, "<-----");
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <div>INDEX</div>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/${"home"}.md`);
  return { props: { content: content.default } };
}
