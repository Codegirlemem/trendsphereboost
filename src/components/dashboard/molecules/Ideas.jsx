import NavButton from '../atom/NavButton';

function Ideas({ idea }) {
  console.log(idea);
  return (
    <article className="w-[269px] ">
      <figure className="h-[184px] w-full bg-orange">figure</figure>
      <div className="bg-lightblue px-2">
        <div className="p-2">
          <NavButton>+ Add Note</NavButton>
        </div>
      </div>
    </article>
  );
}

export default Ideas;
