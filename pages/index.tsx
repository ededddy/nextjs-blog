import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";
import { GetStaticProps } from "next";
import Sector from "../components/Sector";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
}) {
  const topics: { title: string; link: string }[] = [
    {
      title: "Applied Natural Language Processing",
      link: "https://en.wikipedia.org/wiki/Natural_language_processing",
    },
    { title: "GraphQL", link: "https://graphql.org/" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "React", link: "https://reactjs.org/" },
    { title: "Svelte", link: "https://svelte.dev/" },
  ];
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sector>
        <h2>About Me</h2>
        <p>
          Hello, I'm <b>Eddy</b>, a CS major student, currently focus on
          improving my skills! You can contact me through{" "}
          <a href="mailto:eddylei070300@gmail.com">email</a>
        </p>
      </Sector>
      <div className={styles.flexWrapper + " sm:flex-col"}>
        <Sector>
          <h2>Interested Topics</h2>
          <ul>
            {topics.map(({ title, link }, i) => (
              <li className={styles.listItem} key={i}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </Sector>
        <Sector>
          <h2>Recent Blogs</h2>
          <ul>
            {allPostsData.slice(0, 3).map(({ id, date, title }) => (
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
        </Sector>
      </div>
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
