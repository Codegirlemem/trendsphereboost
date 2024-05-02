import CardHead from './CardHead';
import CardBody from './CardBody';
import SaveButton from '../content-bank/atom/SaveButton';
import { useNavigate } from 'react-router-dom';

function PlanCard({ plan }) {
  const navigate = useNavigate();
  const param = plan.name.toLowerCase();

  return (
    <div
      className=" flex flex-col justify-between
    bg-ash p-6 font-montserrat"
    >
      <div className="mb-12 flex flex-col">
        <CardHead plan={plan.name} price={plan.price} />
        <CardBody features={plan.features} discount={plan.discount} />
      </div>
      <div className="flex justify-end">
        <div onClick={() => navigate(`/user-dashboard/checkout/${param}`)}>
          <SaveButton
            color="bg-blue"
            radius="rounded-lg"
            padX="px-8"
            border="border-[0.5px] border-black"
          >
            <span className="text-xl font-semibold">Checkout</span>
          </SaveButton>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
