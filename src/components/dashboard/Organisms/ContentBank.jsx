import { Outlet } from 'react-router-dom';
import AddContent from './AddContent';
import SavedIdeas from './SavedIdeas';
import { useAuth } from '../../../hooks/AuthContext';

function ContentBank() {
  const { path } = useAuth();
  return (
    <>
      <div className="mb-20 ml-6 mt-16 flex gap-16">
        {path.includes('content-bank/') ? (
          <Outlet />
        ) : (
          <>
            <SavedIdeas />
            <AddContent />
          </>
        )}
      </div>
    </>
  );
}

export default ContentBank;
