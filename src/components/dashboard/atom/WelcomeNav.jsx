import NavButton from './NavButton';

function WelcomeNav() {
  return (
    <div className="flex w-max shrink-0 flex-col gap-6">
      <NavButton color="bg-[#21A60C]" to="content-bank">
        Content Bank
      </NavButton>

      <NavButton color="bg-[#21A60C]" to="social-media-management">
        Social Media Mangement
      </NavButton>
    </div>
  );
}

export default WelcomeNav;
