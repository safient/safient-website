import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';
import '../components/FAQ/faq.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Safex</title>
        <meta
          name='Description'
          content='Official website for Safex project.'
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
