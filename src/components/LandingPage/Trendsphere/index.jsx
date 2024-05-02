import style from './style.module.css';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';
import TSPLeft1 from '../../../assets/icons/tsp-left-top.png';
import TSPLeft2 from '../../../assets/icons/tsp-left2.png';

const btnLearnMore = `bg-none text-darklue border border-darklue py-4`;

export const Trendsphere = () => {
  return (
    <div className={style.section2}>
      <span className="absolute left-12">
        <img src={TSPLeft1} alt="" />
      </span>
      <h1 className={style.boost}>
        Boost Your Online Presence <br />
        <span className={style.span1}> With Us Today</span>
      </h1>
      <span className="absolute left-[60%] bg-left-bottom">
        <img src={TSPLeft1} alt="" />
      </span>
      <p className={style.paragraph}>
        TrendSphere Boost is your ultimate companion in navigating the digital
        landscape,
        <br /> empowering businesses with tools to elevate their online presence
        and thrive in the
        <br /> competitive digital sphere
      </p>
      <div className={style.btn}>
        <Link to="/login">
          <CustomButton width="w-[205px]" type={btnLearnMore}>
            Learn More
          </CustomButton>
        </Link>

        <Link to="/signup">
          <CustomButton width="w-[205px]">Sign up</CustomButton>
        </Link>
      </div>
      <span className="absolute bottom-[-38%] left-[28%] -z-10">
        <img src={TSPLeft1} alt="" />
      </span>
      <span className="absolute bottom-[-10%] left-12 ">
        <img src={TSPLeft2} alt="" />
      </span>
      <span className="absolute bottom-[-10%] left-12 ">
        <img src={TSPLeft1} alt="" />
      </span>

      <span className="absolute right-12 top-[-10%] -z-10 ">
        <img src={TSPLeft2} alt="" />
      </span>
      <span className="absolute bottom-[-10%] right-12 ">
        <img src={TSPLeft2} alt="" />
      </span>
    </div>
  );
};
