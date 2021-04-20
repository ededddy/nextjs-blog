import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import UserIcon from "./UserIcon";

const name = "Eddy";
export const siteTitle = "ededddy's den";
export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <UserIcon w={144} h={144} name={name} />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <UserIcon w={108} h={108} name={name} />
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
