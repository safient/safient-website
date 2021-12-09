import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Safient - Trustless crypto asset Safe and Inheritance Protocol</title>
        <meta
          name='Description'
          content='Trustless crypto asset Safe and Inheritance Protocol'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
