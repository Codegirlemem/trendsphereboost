import IdeaBackbround from '../content-bank/IdeaBackbround';
import IdeaActions from '../content-bank/atom/IdeaActions';

function Category({ category }) {
  return (
    <article className="w-[269px] ">
      <IdeaBackbround category={category} />
      <IdeaActions />
    </article>
  );
}

export default Category;
