import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../..//components/layout";

export default function Firstpost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`
              )
            }
          />
        </Head>
        <h1 className={styles.title}>
          First Page <Link href="/">this page!</Link>
        </h1>
      </Layout>
    </>
  );
}
