import { useAccountsProvider } from '../../../context/AccountsProvider';
import { useAuth } from '../../../hooks/AuthContext';
import { message } from '../data/welcome';
import { useEffect, useState } from 'react';
function WelcomeText() {
  const {
    nameTypes: { firstName },
  } = useAccountsProvider();

  const { path } = useAuth();

  const {
    account: { userType },
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

      <p className="max-w-[592px] text-base">
        {path.includes('social-media-management') && userType === 'trial'
          ? 'Welcome to Social Media Management, your all-in-one hub for orchestrating an effective online presence. This service is only available to paid subscribers.'
          : text}
      </p>
    </div>
  );
}

export default WelcomeText;
