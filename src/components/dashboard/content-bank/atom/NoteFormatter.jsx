import AlignText from '../../../../assets/dashboard/icons/alignText.svg';

function NoteFormatter() {
  return (
    <div className="flex items-center justify-between text-base">
      <div className="flex items-center justify-center gap-3 p-2 font-roboto font-normal">
        <span className="cursor-pointer p-2 font-bold">B</span>
        <span className="p-2 italic">I</span>
        <span className="p-2 underline ">U</span>
        <span className=" p-2 ">H1</span>
        <span className="p-2 ">H2</span>
        <div className="flex items-center p-2">
          <div className="">
            <div className=" text-[10px] leading-[8px]">1</div>
            <div className="mb-[-5px] text-[10px] leading-[8px]">2</div>
          </div>
          <span>
            <img className="w-4" src={AlignText} alt="icon to align texts" />
          </span>
        </div>

        <span className="p-2 ">
          <img className="w-4" src={AlignText} alt="icon to align texts" />
        </span>
      </div>
      <span>x Words</span>
    </div>
  );
}

export default NoteFormatter;
