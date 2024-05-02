import { useNavigate } from 'react-router-dom';
import Success from '../../../assets/dashboard/success.svg';
import SaveButton from '../content-bank/atom/SaveButton';
import { useAccountsProvider } from '../../../context/AccountsProvider';

function CheckoutSuccess() {
  const navigate = useNavigate();
  const { setPage } = useAccountsProvider();

  return (
    <section className="mb-14 ml-14 mt-14 flex w-max flex-col items-center gap-12 bg-ash px-6 py-10 font-montserrat">
      <div className="max-w-[300px]">
        <img src={Success} alt="success icon" />
      </div>

      <div className="flex w-[300px] flex-col items-center gap-6">
        <h2 className="text-xl font-semibold">Payment Successful</h2>
        <p className="text-center">
          You have successfully subscribed to TrendSphere Boost Services!
        </p>
      </div>

      <div
        onClick={() => {
          setPage('default');
          navigate('/user-dashboard/overview');
        }}
        className="w-fit"
      >
        <SaveButton
          color="bg-blue"
          radius="rounded-lg"
          padX="px-8"
          border="border-[0.5px] border-black"
        >
          <span className="text-xl font-semibold">Back to Dashboard</span>
        </SaveButton>
      </div>
    </section>
  );
}

export default CheckoutSuccess;
