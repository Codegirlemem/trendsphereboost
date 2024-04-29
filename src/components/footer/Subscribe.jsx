import { Link } from 'react-router-dom';
import CustomButton from '../LandingPage/Button';

const btnRenewal = `bg-none text-black border-[0.5px] border-black py-2`;

function Subscribe() {
  return (
    <div className="font-montserrat ">
      <h3 className="mb-6 text-center text-xl font-semibold">Subscribe</h3>

      <Link to="/login">
        <CustomButton type={btnRenewal} width="w-[182px]">
          Manual Renewal
        </CustomButton>
      </Link>
    </div>
  );
}

export default Subscribe;
