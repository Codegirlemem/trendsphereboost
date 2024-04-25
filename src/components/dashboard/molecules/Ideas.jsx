import IdeaBackbround from '../content-bank/IdeaBackbround';
import IdeaActions from '../content-bank/atom/IdeaActions';

function Ideas({ idea }) {
  return (
    <article className="w-[269px] ">
      <IdeaBackbround idea={idea} />
      <IdeaActions />
    </article>
  );
}

export default Ideas;
