import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Saniyeler İçinde Hediye Önerisi oluştur."
          />
          <meta property="og:site_name" content="hediye.vercel.app" />
          <meta
            property="og:description"
            content="Saniyeler İçinde Hediye Önerisi oluştur."
          />
          <meta property="og:title" content="Hediye Önerisi Oluştur" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hediye Önerisi Oluştur" />
          <meta
            name="twitter:description"
            content="Saniyeler İçinde Hediye Önerisi oluştur."
          />
          <meta
            property="og:image"
            content="https://twitterbio.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://twitterbio.com/og-image.png"
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
