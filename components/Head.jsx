import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="João Oliveira é formado em engenharia de computação e desenvolve frontend de aplicações web]"
      />
      <meta
        name="keywords"
        content="joão, oliveira, web developer portfolio, joão oliveira portfolio"
      />
      <meta property="og:title" content="João Oliveira's Portfolio" />
      <meta
        property="og:description"
        content="A frontend developer building websites that you'd like to use."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "João Oliveira",
};
