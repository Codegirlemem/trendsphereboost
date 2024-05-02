import Naira from '../../../../assets/icons/mdi_naira.svg';

function Price({ children }) {
  return (
    <p className="flex gap-2">
      <img src={Naira} alt="Naira currency sign" />
      {children}
    </p>
  );
}

export default Price;
