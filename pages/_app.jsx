import Router from 'next/router';
import nprogress from 'nprogress';
import debounce from 'lodash.debounce';

import '../styles/index.css';
// import '../styles/nprogress.css';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 100);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
  start.cancel();
  nprogress.done();
  window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', () => {
  start.cancel();
  nprogress.done();
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
