import Naira from '../../../assets/icons/mdi_naira.svg';

function CardHead({ plan, price }) {
  return (
    <div className="mb-6 flex items-center justify-between text-xl font-semibold">
      <h2>{`${plan} Plan`}</h2>
      <p className="flex items-center gap-2 p-2">
        <img src={Naira} alt="Naira currency sign" />
        <span>{price}</span>
      </p>
    </div>
  );
}

export default CardHead;
