import style from "@/app/page.module.css";
import Footer from "@/component/Footer/Footer";
import Link from "next/link";

const page = () => {
  const NAV_ITEMS = [
    { title: "Posts", url: "posts", active: false },
    { title: "Home", url: "", active: true },
    { title: "Contact Us", url: "/contact", active: false },
    { title: "RSS", url: "Rss", active: false },
    { title: "Github", url: "https://github.com/salahashraf3", active: false },
  ];
  return (
    <div className={style.main}>
      <div className={style.home_container}>
        <div className={style.navbar_container}>
          <h1>Home</h1>
          <div className={style.item_lists}>
            {NAV_ITEMS.map((item, id) => {
              return (
                <Link
                  className={`${style.item_list} ${
                    item.active ? style.item_list_active : ""
                  }`}
                  key={id}
                  href={item.url}
                  target="_blank"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={style.home_main_container}>
          <h2>Hi welcome back,</h2>
          <p>
            I completed my study in master of science in biotechnology last
            year. After passing out 12 classes, I brought MY first android
            mobile phone. Then I started using mobile, and I found a video on
            youtube about how to earn online money. that video changed my life.
            During my B.sc, I successfully found my first job on the internet. I
            got selected for a front-end developer role on just theme. My part
            is to convert png design into HTML and CSS.
          </p>
          <p>
            After one year, I changed my job. In my second job, I learn many
            things like reactjs, API, CMS, etc.
          </p>
          <p>
            I started my writing career as a technical writer during my job. I
            published my first book on Linux and a research paper with osf. Some
            later, I publish one more book on bioinformatics.
          </p>
          <p>
            Now I publish an article every week on medium and other
            publications. You can read my article on my medium profile.
          </p>
          <p>Thank for reading</p>
          <p>Rajdeep Singh</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
