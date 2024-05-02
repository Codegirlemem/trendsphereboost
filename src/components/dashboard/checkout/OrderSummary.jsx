import { useParams } from 'react-router-dom';
import { changeCasing } from '../../../utils/getNames';
import { subscriptionPlans } from '../data/subscription';
import Price from '../content-bank/atom/Price';
import ApplyDiscount from './ApplyDiscount';
// import { subscriptionPlans } from '../components/dashboard/data/subscription';

function OrderSummary() {
  const name = useParams();
  const planName = changeCasing(name.plan)[0];

  const plan = subscriptionPlans.find((plan) => plan.name === planName);

  return (
    <section className="bg-ash p-6 font-montserrat">
      <h2 className="mb-10 text-center text-xl font-semibold">Order Summary</h2>
      <div className="flex flex-col gap-[30px]">
        <h3>{`${planName} Subcription`}</h3>
        <div className="border-t-[1px] border-black"></div>

        <ApplyDiscount price={plan.price} />
        <div className="border-t-[1px] border-black"></div>
        <div className="flex items-center justify-between text-xl font-semibold">
          <span>Total</span>
          <Price>{plan.price}</Price>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
