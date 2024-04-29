import CustomButton from '../Button';

function HeroText() {
  return (
    <div className="mb-10 w-[380px] font-montserrat text-white">
      <h1 className="mb-3 text-center text-[32px] font-semibold">About Us</h1>
      <p className="mb-10 text-justify text-xl font-medium leading-8">
        TrendSphere Boost is your ultimate companion in navigating the digital
        landscape, empowering businesses with tools to elevate their online
        presence and thrive in the competitive digital sphere. With personalized
        solutions and actionable insights, we help businesses achieve success
        and visibility in the ever-evolving online world.
      </p>

      <div className="flex justify-center">
        <CustomButton>Learn More</CustomButton>
      </div>
    </div>
  );
}

export default HeroText;
