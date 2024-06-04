import { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { CiCalendar, CiClock2 } from 'react-icons/ci';
import {FaPen} from "react-icon/fa6";

const CreateContent = () => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const handleTextChange = (e) => {
    return setText(e.target.value);
  };
  const handleDescription =(e)=>{
    return setDescription(e.target.value);
  }
  return (
    <div className="flex justify-between">
      <section className="content-wrap flex flex-col gap-3">
        <div className="textarea rounded-[3px] border-[1px] border-[black] px-[1em] py-[3em]">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Write caption"
            className="mb-[2em]"
          />
          <div className="add-btns-wrap flex gap-1">
            <buttton>
              <strong>B</strong>
            </buttton>
            <button>
              <i>I</i>
            </button>
            <button>
              <u>U</u>
            </button>
            <button>
              H<sub>1</sub>
            </button>
            <button>
              H<sub>2</sub>
            </button>
            <button>
              X<sub>Words</sub>
            </button>
          </div>
        </div>
        <div className="upload-wrap fle gap-2">
          <IoCloudUploadOutline />
          <input type="file" />
        </div>
        <div className="save-btn-wrap flex justify-end">
          <button lassName="bg-blue-300 text-[white]">Save</button>
        </div>
      </section>
      <section className="add-event-wrap flex flex-col gap-2">
        <h3 className="tetx-sm font-bold">Add New Event</h3>
        <div className="event-comp-wrap rounded-[3px] border-[1px] border-[black] p-[1em]">
          <table className="mb-[1em]">
            <tr>
              <th>Day</th>
              <th>Month</th>
              <th>Year</th>
            </tr>
            <tr className="border-[1px] border-[black]">
              <td className="border-[1px] border-[black]">30</td>
              <td className="border-[1px] border-[black]">April</td>
              <td className="border-[1px] border-[black]">2024</td>
            </tr>
          </table>
          <div className="calander-date flex gap-2">
            <CiCalendar/>
            <p>30, April 2024</p>
          </div>
          <div className="clock">
            <button className="border-[1px] border-[black]"><CiClock2/> 10:30AM</button>
          </div>
          <div className="tetxarea border-[1px] border-[black] flex gap-1">
            <textarea value={description} onChange={handleDescription} placeholder='write description' className='border-none'/>
            <FaPen/>
          </div>
        </div>
      </section>
    </div>
  );
};
export default  CreateContent;