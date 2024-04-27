import { useAccountsProvider } from '../../../context/AccountsProvider';
import { message } from '../data/welcome';
import { useEffect, useState } from 'react';
function WelcomeText() {
  const {
    nameTypes: { firstName },
    path,
  } = useAccountsProvider();

  const [text, setText] = useState('');
  useEffect(() => {
    for (let key in message) {
      if (path.includes(key)) {
        setText(message[key]);
      }
    }
  }, [text, path]);

  return (
    <div>
      <h1 className="mb-2 text-xl font-semibold">{`Hello ${firstName},`}</h1>

      <p className="max-w-[592px] text-base">{text}</p>
    </div>
  );
}

export default WelcomeText;
