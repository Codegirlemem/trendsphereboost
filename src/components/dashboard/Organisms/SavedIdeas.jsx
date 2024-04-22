import { contents } from '../data/dataIdeas';
import Ideas from '../molecules/Ideas';
function SavedIdeas() {
  return (
    <div>
      <h2 className="mb-6">Saved Ideasss:</h2>

      {contents.map((idea) => (
        <Ideas key={idea.title} idea={idea}></Ideas>
      ))}
    </div>
  );
}

export default SavedIdeas;
