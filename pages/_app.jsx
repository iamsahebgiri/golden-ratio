import dynamic from 'next/dynamic';
import Head from 'next/head';
import '../styles/index.css';
import '../styles/nprogress.css';

const TopProgressBar = dynamic(
  () => import('./../components/topProgressBar/index'),
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Golden Ratio - The Divine Proportion - HackBenchers 4 </title>
        <link rel="shortcut icon" type="image/jpg" href="./icons/edit_img.png " />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Golden Ratio - The Divine Proportion - HackBenchers 4" key="title" />
      </Head>

      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
