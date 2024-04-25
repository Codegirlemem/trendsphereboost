import { NavLink } from 'react-router-dom';

function IdeaBackbround({ idea }) {
  return (
    <figure
      className="relative mb-2  h-[184px] w-full bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${idea.image})` }}
    >
      <NavLink className="absolute right-4 top-2 cursor-pointer text-xs font-medium underline">
        View
      </NavLink>

      <h3 className="absolute right-6 top-[75px] w-[219px] bg-[#00000045] p-2 text-base font-bold">
        {idea.category}: <span className="font-medium">{idea.title}</span>
      </h3>
    </figure>
  );
}

export default IdeaBackbround;
