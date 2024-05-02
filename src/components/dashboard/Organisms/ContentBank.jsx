import AddContent from './AddContent';
import SavedIdeas from './SavedIdeas';

function ContentBank() {
  return (
    <>
      <div className="mb-20 ml-6 mt-16 flex gap-16">
        <SavedIdeas />
        <AddContent />
      </div>
    </>
  );
}

export default ContentBank;
