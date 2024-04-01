import style from "./style.module.css";
import CustomButton from "../Button";
import trendSphere from "../../../assets/LandingPage/icons/trendsphere-icon.svg";

export const Header = () => {
  return (
    <header>
      <section className={style.header}>
        <div className={style.image}>
          <img src={trendSphere} />
          <h2>
            Trendsphere
            <br /> Boost
          </h2>
        </div>
        <div className={style.menu}>
          <ul>
            <li className={style.home}>
              <a href="#/home">Home</a>
            </li>
            <li>
              <a href="#/about">About</a>
            </li>
            <li>
              <a href="#/services">Services</a>
            </li>
            <li>
              <a href="#/contact">Contact</a>
            </li>
          </ul>
        </div>
        <CustomButton variant="bordered" text="Sign up" />
      </section>
      <div className={style.section2}>
        <h1 className={style.boost}>
          Boost Your Online Presence <br />
          <span className={style.span1}> With Us Today</span>
        </h1>
        <p className={style.paragraph}>
          TrendSphere Boost is your ultimate companion in navigating the digital
          landscape,
          <br /> empowering businesses with tools to elevate their online
          presence and thrive in the
          <br /> competitive digital sphere
        </p>
        <div className={style.btn}>
          <CustomButton variant="black" text="Sign up" />
          <CustomButton variant="bordered" text="Learn more" />
        </div>
      </div>
    </header>
  );
};
