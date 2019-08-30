import Head from 'next/head';

export default ({ children, titulo = 'Challenge Climatempo' }) => (
  <div>
    <Head>
      <title>{titulo}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);
