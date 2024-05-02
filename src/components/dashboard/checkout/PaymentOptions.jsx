import { useNavigate } from 'react-router-dom';
import SaveButton from '../content-bank/atom/SaveButton';
import PaymentCard from './PaymentCard';

function PaymentOptions() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-between gap-24 bg-ash p-6 font-montserrat">
      <div>
        <h2 className="mb-10 text-xl font-semibold">Payment Options</h2>
        <PaymentCard />
      </div>

      <div onClick={() => navigate(`/user-dashboard/checkout`)}>
        <SaveButton color="bg-blue" radius="rounded-lg" padX="px-8">
          Check Out
        </SaveButton>
      </div>
    </section>
  );
}

export default PaymentOptions;
