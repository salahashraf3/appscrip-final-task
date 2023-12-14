import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "@/apolloClient";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import style from "@/pages/blogs/slug.module.css";
import Footer from "@/component/Footer/Footer";
import "@/app/globals.css";

const BLOG_QUERY = gql`
  query BlogQuery($slug: String!) {
    blog(where: { slug: $slug }) {
      body {
        html
      }
      author
      date
      description
      title
      tags {
        html
      }
      slug
    }
  }
`;

const BlogPage = () => {
  const NAV_ITEMS = [
    { title: "Posts", url: "/posts", active: true },
    { title: "Home", url: "/", active: false },
    { title: "Contact Us", url: "/contact", active: false },
    { title: "RSS", url: "/Rss", active: false },
    { title: "Github", url: "https://github.com/salahashraf3", active: false },
  ];

  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(BLOG_QUERY, {
    variables: { slug },
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogPosts = data?.blog;

  const bodyHtml = blogPosts?.body?.html || "";

  return (
    <div className={style.main}>
      <header className={style.header}>
        <h1>{blogPosts?.title}</h1>
        <div className={style.header_down}>
          <div className={style.left}>
            <p>{blogPosts?.author}</p>
            <p>{blogPosts?.date}</p>
          </div>
          <div className={style.right}>
            <Link className={style.back} href={"/posts"}>
              Back
            </Link>
          </div>
        </div>
      </header>
      <div
        className={style.body}
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      ></div>
      <Footer />
    </div>
  );
};

export default BlogPage;
