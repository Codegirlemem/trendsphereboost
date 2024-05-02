import { useState } from 'react';
import Price from '../content-bank/atom/Price';
import SaveButton from '../content-bank/atom/SaveButton';
import { discountCode } from '../data/subscription';
import { useNavigate } from 'react-router-dom';
import { useAccountsProvider } from '../../../context/AccountsProvider';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../../utils/localStorageTasks';
import { updateObjectArray } from '../../../utils/tasks';

function ApplyDiscount({ price }) {
  // const code = discountCode;
  // const { setPage } = useAccountsProvider();
  const navigate = useNavigate();
  const { account } = useAccountsProvider();
  // console.log(userType);

  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!code.trim()) {
      setError('Please enter your code!');
      setCode('');
    } else {
      const result = discountCode.find((item) => item === code);
      if (!result) setError('Code is not valid!');
      else if (result) {
        const accounts = getLocalStorageItem('Accounts');
        account.userType = 'trial';

        updateObjectArray(accounts, account);

        setLocalStorageItem('Accounts', accounts);
        setCode('');
        // setPage('success');
        navigate('/user-dashboard/success');
      }
    }
  }

  return (
    <div>
      <div className="mb-7 flex justify-between text-xl font-semibold">
        <span>Subtotal</span>
        <Price>{price}</Price>
      </div>

      <div className="mb-9 border-t-[1px] border-black"></div>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-3 flex items-center gap-10">
          <label
            htmlFor="discountCode"
            className="border border-black  px-6 py-5 text-sm"
          >
            <input
              type="text"
              placeholder=" Enter Discount Code"
              name="discountCode"
              value={code}
              className="bg-inherit outline-none"
              onChange={(e) => {
                setCode(e.target.value);
                setError('');
              }}
            />
          </label>
          <SaveButton
            color="bg-blue"
            radius="rounded-lg"
            padX="px-8"
            border="border-[0.5px] border-black"
          >
            <span className="text-xl font-semibold">Apply</span>
          </SaveButton>
        </div>

        {error && <div className="text-orange">{error}</div>}
      </form>
    </div>
  );
}

export default ApplyDiscount;
