import style from './style.module.css';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';
export const Trendsphere = () => {
  return (
    <div className={style.section2}>
      <h1 className={style.boost}>
        Boost Your Online Presence <br />
        <span className={style.span1}> With Us Today</span>
      </h1>
      <p className={style.paragraph}>
        TrendSphere Boost is your ultimate companion in navigating the digital
        landscape,
        <br /> empowering businesses with tools to elevate their online presence
        and thrive in the
        <br /> competitive digital sphere
      </p>
      <div className={style.btn}>
        <Link to="/signup">
          <CustomButton variant="black" text="Sign up" />
        </Link>
        <CustomButton variant="bordered" text="Learn more" />
      </div>
    </div>
  );
};
