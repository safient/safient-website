import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Safex</title>
        <meta
          name='Description'
          content='Official website for Safex project.'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
