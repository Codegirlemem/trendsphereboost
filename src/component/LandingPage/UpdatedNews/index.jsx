import style from "./style.module.css";
import CustomButton from "../Button";
export const UpdatedNews = () => {
  return (
    <section className={style.updated}>
      <h1 className={style.news}>Get your Updated News</h1>
      <p className={style.latest}>
        Stay informed with our latest updates and industry news. Sign up to
        receive our newsletter and stay ahead of the curve with the latest
        <br />
        trends, insights, and tips delivered straight to your inbox.
      </p>
      <div className={style.inputform}>
        <form className={style.inputbutton}>
          <input placeholder="Enter your email" className={style.email} />
          <CustomButton variant="bordered" text="Send" />
        </form>
      </div>
    </section>
  );
};
