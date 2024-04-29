import Tiktok from '../../assets/LandingPage/icons/iconoir_tiktok.svg';
import Twitter from '../../assets/LandingPage/icons/akar-icons_x-fill.svg';
import Facebook from '../../assets/LandingPage/icons/ri_facebook-fill.svg';
import Instagram from '../../assets/LandingPage/icons/ri_instagram-line.svg';

function FollowUs() {
  return (
    <div>
      {' '}
      <div className="font-montserrat">
        <h3 className="mb-6 text-xl font-semibold">Follow Us</h3>
        <div className="flex items-center gap-4">
          <span>
            <img src={Tiktok} alt="Tiktok logo" />
          </span>
          <span>
            <img src={Twitter} alt="Twitter logo" />
          </span>
          <span>
            <img src={Facebook} alt="Facebook logo" />
          </span>
          <span>
            <img src={Instagram} alt="Instagram logo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
