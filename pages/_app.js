import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Safex</title>
        <meta
          name='Description'
          content='Secure crypto secret exchange and inheritance protocol'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
