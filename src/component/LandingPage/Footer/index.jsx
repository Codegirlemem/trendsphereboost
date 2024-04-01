import style from "./style.module.css";
import trendSphere from "../../../assets/LandingPage/icons/trendsphere-icon.svg";
import arrowIcon from "../../../assets/LandingPage/icons/arrowIcon.svg";
import socialLinks from "../../../assets/LandingPage/icons/socialLinks.svg";
export const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.img}>
        <div className={style.image}>
          <img src={trendSphere} />
          <h2>
            Trendsphere
            <br /> Boost
          </h2>
        </div>
        <div className={style.img2}>
          <img src={arrowIcon} />
        </div>
      </div>
      {/* note */}
      <div className={style.wrapper}>
        <div className={style.support}>
          <p className={style.num}>+1 (2345) 678-90-12</p>
          <p>support@personal.com</p>
        </div>
        <div className={style.quick}>
          <h4>Quick Links</h4>
          <div className={style.product}>
            <div className={style.info}>
              <p>Product</p>
              <p>Information</p>
            </div>
            <div className={style.info}>
              <p>company</p>
              <p>Lift Media</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Subscribe</h4>
          <form className={style.updates}>
            <input
              placeholder="Get product updates"
              className={style.inputupdates}
            />
            <button className={style.btn}>
              <img src={arrowIcon} className={style.arrow} />
            </button>
          </form>
        </div>
      </div>
      {/* hr line */}
      <div className={style.divider}></div>
      <div className={style.links}>
        <div>© 2024 Trendsphere Boost. All rights reserved</div>
        <div>
          <img src={socialLinks} />
        </div>
      </div>
    </section>
  );
};
