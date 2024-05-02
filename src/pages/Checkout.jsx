import OrderSummary from '../components/dashboard/checkout/OrderSummary';
import PaymentOptions from '../components/dashboard/checkout/PaymentOptions';

function Checkout() {
  // const [page, setStatus] = useState('checkout');
  // const { page } = useAccountsProvider();

  // const modal = 'pointer-events-none opacity-50 blur-sm -z-10';

  return (
    <section className="ml-12 mt-20 flex  justify-between gap-10">
      <PaymentOptions />
      <OrderSummary />
    </section>

    // <section className=" grid h-[900px] grid-cols-1 grid-rows-[500px] items-center justify-center">
    //   {/* <div className={page === 'success' ? 'z-10 block' : 'hidden'}>
    //     {' '}
    //     <CheckoutSuccess />
    //   </div> */}
    //   <div className="z-10 col-span-1 row-span-1 ">
    //     <CheckoutSuccess />
    //   </div>

    //   {/* className={page === 'default' ? '' : 'modal'} */}
    //   <div className="pointer-events-none -z-10 col-span-1 row-span-1  opacity-30 blur-[3px]">
    //     <section className="ml-12 mt-20 flex  justify-between gap-10">
    //       <PaymentOptions />
    //       <OrderSummary />
    //     </section>
    //   </div>
    // </section>
  );
}

export default Checkout;
