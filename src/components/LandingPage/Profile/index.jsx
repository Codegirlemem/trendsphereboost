import CustomButton from "../Button";
import style from "./style.module.css";
import profileBranding from "../../../assets/LandingPage/images/profilebranding.svg";
import contentImage from "../../../assets/LandingPage/images/contentImage.svg";
import profileOptimization from "../../../assets/LandingPage/images/profileOptimization.svg";
export const Profile = () => {
  return (
    <section>
      <div className={style.boostprofile}>
        <h1 className={style.trendsphere}>Why Trendsphere Boost?</h1>
        <p className={style.p2}>
          We are so much more than just a social media marketing company.
          Trendsphere oost is <br /> dedicated to empowering your online
          presence for success in the digital sphere
        </p>
      </div>
      <div className={style.socialsection}>
        <div>
          <h1>PROFILE BRANDING & OPTIMIZATION</h1>
          <p>
            Our expert team handles your brand's social
            <br /> media accounts, creating engaging content,?
            <br /> managing interactions, and driving growth,
            <br />
            so you can focus on running your business <br />
            while we boost your online presence.
          </p>
          <CustomButton variant="bordered" text="Enabled" />
        </div>
        <div>
          <img src={profileBranding} />
        </div>
      </div>
      <div className={style.socialsection}>
        <div>
          <img src={contentImage} />
        </div>
        <div className={style.content}>
          <h1>CONTENT MARKETING</h1>
          <p>
            Our content marketing services focus on <br />
            creating and distributing valuable and <br />
            relevant content to attract and engage your <br />
            target audience. Through blog posts,
            <br /> articles, videos, and more, we help establish
            <br /> your brand as an authority in your industry <br />
            and drive meaningful interactions with your <br /> audience.
          </p>
          <CustomButton variant="bordered" text="Enabled" />
        </div>
      </div>
      <div className={style.socialsection}>
        <div>
          <h1>PROFILE BRANDING & OPTIMIZATION</h1>
          <p>
            Our expert team handles your brand's social
            <br /> media accounts, creating engaging content,?
            <br /> managing interactions, and driving growth,
            <br />
            so you can focus on running your business <br />
            while we boost your online presence.
          </p>
          <CustomButton variant="bordered" text="Enabled" />
        </div>
        <div>
          <img src={profileOptimization} />
        </div>
      </div>
    </section>
  );
};
