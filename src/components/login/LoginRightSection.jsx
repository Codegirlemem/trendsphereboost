import style from "./LoginRight.module.css";
import Image from "../../assets/images/loginImg.png";

export default function SignupLeftSection() {
  return (
    <section className={style.container}>
      <div className={style.image}>
        <img src={Image} alt="Phone" />
      </div>

      <div className={style.loginText}>
        <h2 className={style.heading}>Trendsphere Boost</h2>
        <p>Empowering your online presence for success in the digital sphere</p>
      </div>
    </section>
  );
}
