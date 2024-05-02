import Price from '../content-bank/atom/Price';

function CardHead({ plan, price }) {
  return (
    <div className="mb-6 flex items-center justify-between p-2 text-xl font-semibold">
      <h2>{`${plan} Plan`}</h2>
      <Price>{price}</Price>
    </div>
  );
}

export default CardHead;
