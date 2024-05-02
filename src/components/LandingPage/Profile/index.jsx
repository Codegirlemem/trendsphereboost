import CustomButton from '../Button';
import style from './style.module.css';
import profileBranding from '../../../assets/LandingPage/images/profilebranding.svg';
import contentImage from '../../../assets/LandingPage/images/contentImage.svg';
import profileOptimization from '../../../assets/LandingPage/images/profileOptimization.svg';

import styled from 'styled-components';
import { useScroll } from '../../../hooks/ScrollContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/AuthContext';

const P = styled.p`
  font-size: 24px;
  text-align: justify;
  font-family: 'Montserrat', sans-serif;
  line-height: 140%; /* 33.6px */
  margin-bottom: 42px;
  text-align: justify;
  width: 98%;
`;

export const Profile = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  const navigate = useNavigate();

  function startSubcription() {
    if (!isAuthenticated) navigate('/login');
    else navigate('/user-dashboard/subscription-plans');
  }

  const { servicesRef } = useScroll();
  return (
    <section ref={servicesRef} className="mb-36">
      <div className={style.boostprofile}>
        <span className={style.trendsphere}>
          <h2 className="">Why Trendsphere Boost?</h2>
        </span>

        <p className={style.p2}>
          We are so much more than just a social media marketing company.
          Trendsphere oost is <br /> dedicated to empowering your online
          presence for success in the digital sphere
        </p>
      </div>
      <div
        className={`flex flex-col items-stretch gap-[104px] px-24 ${style.about}`}
      >
        <div className={style.items}>
          <div className="max-w-[557px]">
            <h3>SOCIAL MEDIA MANAGEMENT</h3>
            <P>
              Our expert team handles your brand's social media accounts,
              creating engaging content, managing interactions, and driving
              growth, so you can focus on running your business while we boost
              your online presence.
            </P>
            <div onClick={startSubcription}>
              <CustomButton width="w-44">Subscribe</CustomButton>
            </div>
          </div>
          <div className="flex h-[450px]  justify-end">
            <img src={profileBranding} alt="profile branding" />
          </div>
        </div>
        <div className={style.items}>
          <div className="flex h-[450px]">
            <img src={contentImage} alt="content" />
          </div>
          <div className="flex max-w-[557px] flex-col items-end">
            <h3 className="">CONTENT BANK</h3>
            <P>
              Our content bank services focus on creating and distributing
              valuable and relevant content to attract and engage your target
              audience. Through blog posts, articles, videos, and more, we help
              establish your brand as an authority in your industry and drive
              meaningful interactions with your audience.
            </P>
            <div onClick={startSubcription}>
              <CustomButton width="w-44">Subscribe</CustomButton>
            </div>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};
