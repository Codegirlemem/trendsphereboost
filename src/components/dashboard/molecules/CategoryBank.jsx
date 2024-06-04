import IdeaBackground from '../content-bank/IdeaBackground';
// import IdeaActions from '../content-bank/atom/IdeaActions';

function CategoryBank({ category, show }) {
  return (
    <article className="w-[269px] ">
      <IdeaBackground category={category} show={show} />
      {/* <IdeaActions /> */}
    </article>
  );
}

export default CategoryBank;
