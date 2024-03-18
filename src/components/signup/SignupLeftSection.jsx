import style from "./SignupLeft.module.css";

import { Logo, SignUpImage } from "../../UI/FormIcons";

export default function SignupLeftSection() {
  return (
    <section className={style.container}>
      <div className={style.signupText}>
        <Logo logo="orange" />
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
