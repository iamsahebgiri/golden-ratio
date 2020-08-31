import dynamic from 'next/dynamic';
import '../styles/index.css';
import '../styles/nprogress.css';

const TopProgressBar = dynamic(
  () => import('./../components/topProgressBar/index'),
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
