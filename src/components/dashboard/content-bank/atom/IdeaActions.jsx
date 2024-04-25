import Trash from '../../../../assets/dashboard/icons/trash-2.svg';
import Edit from '../../../../assets/dashboard/icons/edit.svg';
import Download from '../../../../assets/dashboard/icons/download.svg';
import Plus from '../../../../assets/dashboard/icons/plusicon.svg';

function IdeaActions() {
  return (
    <div className="bg-lightblue px-2">
      <div className="flex justify-between p-2">
        <button className="my-3 ml-[18px]">
          <img src={Plus} alt="icon to add a note" />
        </button>
        <div className="flex justify-between gap-1 p-2">
          <img className="cursor-pointer" src={Edit} alt="icon to add a note" />
          <img
            className="cursor-pointer"
            src={Trash}
            alt="icon to add a note"
          />
          <img
            className="cursor-pointer"
            src={Download}
            alt="icon to add a note"
          />
        </div>
      </div>
    </div>
  );
}

export default IdeaActions;
