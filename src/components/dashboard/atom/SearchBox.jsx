import SearchIcon from '../../../assets/dashboard/icons/search-icon.svg';

function SearchBox() {
  return (
    <label className="mb-[32px] ml-[39px] mt-[18px] flex">
      <input
        className=" rounded-l border-[1.5px] border-[#bcb7b754] px-5 py-2 font-inter text-sm font-normal outline-none placeholder:font-medium placeholder:text-[#CFC8C8] md:w-[476px] md:text-lg"
        type="text"
        placeholder="Search"
      />
      <button className="flex w-[62px] items-center justify-center rounded-r bg-blue">
        <img src={SearchIcon} alt="search icon" />
      </button>
    </label>
  );
}
// border-radius: 4px 0px 0px 4px;
// border: 1.5px solid var(--grey-for-disabled-button, #bcb7b754);
// background: var(--white, #FFF);

export default SearchBox;
