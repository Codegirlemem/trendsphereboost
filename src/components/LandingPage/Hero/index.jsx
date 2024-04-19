import CustomButton from '../Button';
import style from './style.module.css';
// import socialDashboard from "../../../assets/LandingPage/images/socialDashboard.svg";
import socialDashboard from '../../../assets/LandingPage/images/social-dashboard-cuate 2.png';
export const Hero = () => {
  return (
    <section>
      <div className={style.herosection}>
        <div>
          <img src={socialDashboard} alt="social dashboard" />
        </div>
        <div className={style.text}>
          <h1>About Us</h1>
          <p className={style.digital}>
            Trendsphere boost is your ultimate <br />
            companion in navigating the digital
            <br /> landscape,empowering businesses <br /> with tools to evaluate
            their online
            <br />
            presence and thrive in the <br /> competitive digital sphere. With
            <br />
            personalized solution and <br /> actionable insights, we help
            <br />
            business achieve success and <br /> visibility in the ever-revolving
            online
            <br /> world.
          </p>
          <CustomButton variant="bordered" text="Learn more" />
        </div>
      </div>
    </section>
  );
};
