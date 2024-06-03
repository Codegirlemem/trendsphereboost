import { FaArrowUp } from 'react-icons/fa';

const SocialProfile = ({ icon, socialName, followersNumber, styles }) => {
  return (
    <div className={`${styles} rounded-[5px] p-[1em]`}>
      <div className="social-iconAndName mb-[0.5em] flex gap-2">
        <img src={icon} alt="social-media-icon" width="10px" height="10px" />
        <p>{socialName}</p>
      </div>
      <div className="followersNumber flex flex-col gap-3">
        <p>{followersNumber}K</p>
      </div>
      <div className="followers flex gap-1">
        <p>Followers</p>
        {FaArrowUp}
      </div>
    </div>
  );
};
export default SocialProfile;
