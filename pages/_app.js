import Head from 'next/head';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
      <Head>
        <title>김한규 - 로켓AI 프론트엔드 코딩테스트</title>
      </Head>
      <Component {...pageProps} />
    </>
}
