import { paymentTypes } from '../data/payment';

function PaymentCard() {
  return (
    <div>
      <ul className="flex gap-12">
        {paymentTypes.map((payment) => (
          <li key={payment.name} className="flex flex-col justify-between p-2">
            <img src={payment.type} alt={payment.name} />
            <span>{payment.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentCard;
