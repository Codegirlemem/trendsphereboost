import style from './SignupLeft.module.css';

import { Logo, SignUpImage } from '../../UI/FormIcons';
import { Link } from 'react-router-dom';

export default function SignupLeftSection() {
  return (
    <section className={style.container}>
      <div className={style.signupText}>
        <Link to="/" className="cursor-pointer">
          <Logo logo="orange" />
        </Link>

        <h2 className={style.text}>
          Trendsphere Boost Empowering your online presence for success in the
          digital sphere
        </h2>
      </div>
      <div>
        <div className={style.sectionImg}>
          <SignUpImage />
        </div>
      </div>
    </section>
  );
}
