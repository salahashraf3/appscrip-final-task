import style from "@/app/page.module.css";
import Footer from "@/component/Footer/Footer";
import Link from "next/link";

const contact = () => {
  const NAV_ITEMS = [
    { title: "Posts", url: "/posts", active: false },
    { title: "Home", url: "/", active: false },
    { title: "Contact Us", url: "/contact", active: true },
    { title: "RSS", url: "/Rss", active: false },
    { title: "Github", url: "https://github.com/salahashraf3", active: false },
  ];
  return (
    <div className={style.contact}>
      <div className={style.home_container}>
        <div className={style.navbar_container}>
          <h1>Contact</h1>
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
          <p style={{ marginTop: "2rem" }}>
            Et minim non do exercitation do dolore aute duis amet excepteur.
            Anim adipisicing anim dolor aliquip ut aute nostrud est. Id irure
            laboris commodo velit ipsum Lorem ex ut eu nulla.
          </p>
          <p>
            Adipisicing anim adipisicing amet consequat sint Lorem laboris et
            aliqua excepteur ex sit et. Et qui dolor deserunt proident in do ea
            consequat incididunt et.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
