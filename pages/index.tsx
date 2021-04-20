import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Hello, I'm <b>Eddy</b> and I like building stuffs! You can contact me
          through <a href="mailto:eddylei070300@gmail.com">email</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
