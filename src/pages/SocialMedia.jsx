import React from 'react';
import SearchInput from '../../components/socials/Search';
import avatar from '../../src/assets/avatars/user-img.svg';
import SocialProfile from '../../src/components/socials/SocialProfile';
import instagramIcon from '../../src/assets/icons/instagram.svg';
import facebookIcon from '../../src/assets/icons/facebook.svg';
import twitterIcon from '../../src/assets/icons/twitter.svg';
import pinterestIcon from '../../src/assets/icons/linkedin.svg';

const SocialMedia = () => {
  return (
    <div className="px-[1.5em]">
      <SearchInput />
      <section className="profileAndStart flex items-center justify-between">
        <div className="profile-wrap flex gap-3 rounded-[5px] bg-[#afaeae] p-[0.5em]">
          <div className="profilepix h-6 w-6 rounded-full">
            <img src={avatar} alt="avatar profile pix" />
          </div>
          <div className="profile-info flex flex-col gap-3">
            <h1>Hello Jae</h1>
            <p>
              Welcome to Social Media Management,your all-in-one hub for
              orchestrating an efective online presence. With powerful tools and
              insightful analytics at your disposal, this platform empowers you
              to craft,schedule, and analyse your social media content with
              ease.
            </p>
          </div>
        </div>
        <button className="start-btn rounded-sm bg-[#ff3c00]">
          Start free trail
        </button>
      </section>
      <section className="linked-socials flex flex-col gap-2">
        <div>
          {' '}
          <h1>Linked Profiles</h1>
        </div>
        <div className="flex gap-2">
          <SocialProfile
            icon={instagramIcon}
            socialName="Instagram"
            followersNumber="20"
            styles="bg-gradient-to-b from-orange-300 to-yellow-300"
          />
          <SocialProfile
            icon={facebookIcon}
            socialName="Facebook"
            followersNumber="50"
            styles="bg-gradient-to-r from-orange-200 to-blue-100"
          />
          <SocialProfile
            icon={twitterIcon}
            socialName="Twitter/X"
            followersNumber="5"
            styles="bg-gradient-to-r from-orange-200 to-yellow-200 "
          />
          <SocialProfile
            icon={pinterestIcon}
            socialName="Facebook"
            followersNumber="7"
            styles="bg-gradient-to-r from-orange-200 toblack-200"
          />
        </div>
      </section>
      <section classNam e="schedular"></section>
    </div>
  );
};

export default SocialMedia;
