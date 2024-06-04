import { FaTrash, FaPlus } from 'react-icons/fa';

const Schedular = () => {
  return (
    <div className="schedular-component flex flex-col gap-2 bg-black-200 rounded-[5px] p-[1em]">
      <div className="trash-icon-wrapper flex">
        <FaTrash className="justify-end" />
      </div>
      <div className="plus-icon-wrappper py-[0.5em] flex flex-col gap-1 items-center justify-center">
      <div className="h-4 w-4 rounded-full border-[1px] border-[black] flex justify-center items-center"><FaPlus className="text-[1.5rem]"/></div>
      <p>Add Date</p>
    </div>
    <div className="btn-wrap flex justify-center items-center"><button className="bg-blue-500 text-[white]rounded-[5px] p-[0.5em]">Add Content</button></div>
    </div>
  );
}

export default Schedular;
