import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Safient - Non-custodial secret Recovery and Inheritance Protocol</title>
        <meta
          name='Description'
          content='Non-custodial secret Recovery and Inheritance Protocol'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
