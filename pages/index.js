import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    </Layout>
  );
}
