import Skip from '../../../assets/dashboard/icons/skip-back.svg';

function SkipBack({ children }) {
  return (
    <button className="flex gap-2">
      <img src={Skip} alt="Skip back to dashboard arrow" />
      {children}
    </button>
  );
}

export default SkipBack;
