import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';
import '../components/FAQ/faq.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Portex</title>
        <meta
          name='Description'
          content='A Next.js starter styled using Tailwind CSS.'
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
