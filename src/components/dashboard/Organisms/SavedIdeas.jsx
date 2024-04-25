import { contents } from '../data/dataIdeas';
import Ideas from '../molecules/Ideas';
function SavedIdeas() {
  return (
    <section className="w-max font-montserrat">
      <h2 className="mb-6 text-2xl font-medium">Saved Ideas</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10">
        {contents.map((idea) => (
          <Ideas key={idea.title} idea={idea}></Ideas>
        ))}
      </div>
    </section>
  );
}

export default SavedIdeas;
