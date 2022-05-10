import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel=' icon' href='/favicon.ico' />

          <meta name='robots' content='follow, index' />
          <meta
            content='Non-custodial crypto asset Recovery and Inheritance Protocol'
            name='description'
          />
          <meta property='og:url' content='https://safient.io/' />
          <link rel='canonical' href='https://safient.io/' />
          <meta property='og:type' content='Official website of Safient' />
          <meta property='og:site_name' content='Safient' />
          <meta
            property='og:description'
            content='Safient aims to provide a convenient and safe way of inheriting and safekeeping mechanism for crypto assets without exposing it to any intermediaries.'
          />
          <meta
            property='og:title'
            content='Safient - Non-custodial secret Recovery and Inheritance Protocol'
          />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='@safientio' />
          <meta name='twitter:site' content='https://twitter.com/safientio' />
          <meta
            name='twitter:description'
            content='Secure way to exchange and inherit #crypto secrets'
          />
          <meta
            name='twitter:image'
            content='https://twitter.com/safientio/photo'
          />

          <meta name='github:title' content='Safient' />
          <meta name='github:site' content='https://github.com/safient' />
          <meta
            name='github:description'
            content='Non-custodial crypto asset Recovery and Inheritance Protocol'
          />
          <meta
            name='github:image'
            content='https://avatars.githubusercontent.com/u/79969857?s=400&u=8c5ca9cec3cf8e7e7790f788b64e96582e415b04&v=4'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
