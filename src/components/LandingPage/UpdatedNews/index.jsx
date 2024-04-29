import style from './style.module.css';

import CustomButton from '../Button';
export const UpdatedNews = () => {
  return (
    <section className={style.updated}>
      <h1 className={style.news}>Get your Updated News</h1>
      <p className=", mb-10 max-w-[1116px] font-montserrat text-base font-medium">
        Stay informed with our latest updates and industry news. Sign up to
        receive our newsletter and stay ahead of the curve with the latest
        trends, insights, and tips delivered straight to your inbox.
      </p>
      <div className={style.inputform}>
        <form className="flex w-[630px] gap-3 rounded-md bg-white py-4 pl-16 pr-4 text-base text-black">
          <input placeholder="Enter your email" className={style.email} />
          <CustomButton width="w-[152px]">Send</CustomButton>
        </form>
      </div>
    </section>
  );
};
