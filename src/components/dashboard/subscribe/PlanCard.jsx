import Checkout from './Checkout';
import CardHead from './CardHead';
import CardBody from './CardBody';

function PlanCard({ plan }) {
  return (
    <div
      className=" flex flex-col justify-between
    bg-ash p-6 font-montserrat"
    >
      <div className="mb-12 flex flex-col">
        <CardHead plan={plan.plan} price={plan.price} />
        <CardBody features={plan.features} discount={plan.discount} />
      </div>
      <div className="flex justify-end">
        <Checkout />
      </div>
    </div>
  );
}

export default PlanCard;
