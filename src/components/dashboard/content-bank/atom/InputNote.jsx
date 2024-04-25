// import Edit from '../../../../assets/dashboard/icons/edit-2.svg';
import NoteFormatter from './NoteFormatter';

function InputNote() {
  return (
    <label
      htmlFor="addnote"
      className="block w-[458px]  rounded-sm border-[0.5px] border-black px-6 py-4"
    >
      {/* <img src={Edit} alt="icon to write a note" /> */}
      <textarea
        cols="30"
        rows="13"
        id="addnote"
        name="addnote"
        className=" w-full resize-none border-none text-base outline-none"
        placeholder={`Add Note`}
      ></textarea>
      <NoteFormatter />
    </label>
  );
}

export default InputNote;
