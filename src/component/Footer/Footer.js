import style from "@/component/Footer/Footer.module.css";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import insat from "@/assets/insta1.png";
import linked from "@/assets/linkedin.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_left}>
        <p>
          © By Salah Ashraf —
          <a href="#" target="_blank">
            @Official_R_deep
          </a>
        </p>
      </div>
      <div className={style.footer_right}>
        <a target="_blank" href="https://www.facebook.com/officialrajdeepsingh">
          <Image src={facebook} alt="facebook" />
        </a>
        <a target="_blank" href="https://www.facebook.com/officialrajdeepsingh">
          <Image src={twitter} alt="twitter" />
        </a>
        <a target="_blank" href="https://www.facebook.com/officialrajdeepsingh">
          <Image src={insat} alt="instagram" />
        </a>
        <a target="_blank" href="https://www.facebook.com/officialrajdeepsingh">
          <Image src={linked} alt="linked in" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
