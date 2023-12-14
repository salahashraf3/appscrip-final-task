"use client";
import Link from "next/link";
import style from "@/app/posts/page.module.css";
import Footer from "@/component/Footer/Footer";
import client from "@/apolloClient"; // Import the Apollo Client instance
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

const MY_QUERY = gql`
  query MyQuery {
    blogs {
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

const posts = () => {
  const NAV_ITEMS = [
    { title: "Posts", url: "/posts", active: true },
    { title: "Home", url: "/", active: false },
    { title: "Contact Us", url: "/contact", active: false },
    { title: "RSS", url: "/Rss", active: false },
    { title: "Github", url: "/Github", active: false },
  ];

  const { loading, error, data } = useQuery(MY_QUERY, { client });

  //   if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  const blogPosts = data?.blogs || [];

  return (
    <div className={style.main}>
      <div className={style.home_container}>
        <div className={style.navbar_container}>
          <h1>Posts</h1>
          <div className={style.item_lists}>
            {NAV_ITEMS.map((item, id) => {
              return (
                <Link
                  className={`${style.item_list} ${
                    item.active ? style.item_list_active : ""
                  }`}
                  key={id}
                  href={item.url}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={style.posts_main_container}>
          <p>Read our latest blog posts.</p>
          <div className={style.posts_container}>
            {console.log(blogPosts)}
            {blogPosts?.map((blog, id) => {
              return (
                <div key={id} className={style.card_container}>
                  <h3>
                    <Link
                      href={`/blogs/${blog?.slug}`}
                      className={style.card_title}
                    >
                      {blog?.title}
                    </Link>
                  </h3>
                  <p>
                    {blog.description}
                    <Link className={style.read_now} href={`/blogs/${blog?.slug}`}>
                      Read Now
                    </Link>
                  </p>
                  <p className={style.date}>
                    {new Date(blog.date)?.toLocaleDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default posts;
