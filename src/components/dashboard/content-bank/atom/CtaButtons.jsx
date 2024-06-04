import { Link, useNavigate } from 'react-router-dom';
import SaveButton from './SaveButton';

function CtaButtons() {
  const navigate = useNavigate();
  return (
    <div className="space-x-9">
      <Link>
        <SaveButton
          color="bg-orange"
          radius="rounded-lg"
          padX="px-8"
          border="border border-orange"
        >
          <span className="mx-10 my-2 block font-semibold">
            Join Our Community
          </span>
        </SaveButton>
      </Link>

      <span onClick={() => navigate(-1)}>
        <SaveButton
          color="bg-none"
          radius="rounded-lg"
          padX="px-8"
          border="border
border-orange"
        >
          <span className="mx-10 my-2 block font-semibold text-black">
            Back to Content Bank
          </span>
        </SaveButton>
      </span>
    </div>
  );
}

export default CtaButtons;
