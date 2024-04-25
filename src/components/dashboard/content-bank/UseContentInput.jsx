import NavButton from '../atom/NavButton';
import Download from '../../../assets/dashboard/icons/orange-download.svg';
import Save from '../../../assets/dashboard/icons/save.svg';
import SaveButton from './atom/SaveButton';

function UseContentInput() {
  return (
    <div className="flex gap-6">
      <NavButton>
        <div className="flex items-center gap-2">
          <img src={Download} alt="icon to download content" />
          <span className="text-darkblue"> Download from Saved Ideas</span>
        </div>
      </NavButton>
      <SaveButton color="bg-blackblue" radius="rounded-lg" padX="px-6">
        <div className="flex items-center justify-center gap-6">
          <img src={Save} alt="icon to save a file" />
          <span>Save</span>
        </div>
      </SaveButton>
    </div>
  );
}

export default UseContentInput;
