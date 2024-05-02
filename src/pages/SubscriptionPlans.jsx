import PlanCard from '../components/dashboard/subscribe/PlanCard';
import { subscriptionPlans } from '../components/dashboard/data/subscription';

function SubscriptionPlans() {
  return (
    <section>
      <section className="mb-40 ml-12 mt-[72px] flex justify-between gap-7">
        {subscriptionPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </section>
    </section>
  );
}

export default SubscriptionPlans;
