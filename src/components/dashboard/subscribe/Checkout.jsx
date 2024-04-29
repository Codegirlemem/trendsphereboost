import { Link } from 'react-router-dom';
import SaveButton from '../content-bank/atom/SaveButton';

function Checkout() {
  return (
    <Link to="subscription-plans">
      <SaveButton color="bg-blue" radius="rounded-lg" padX="px-8">
        Check Out
      </SaveButton>
    </Link>
  );
}

export default Checkout;
