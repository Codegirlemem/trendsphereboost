import UseContentInput from '../content-bank/UseContentInput';
import InputNote from '../content-bank/atom/InputNote';
import Uploads from '../content-bank/atom/Uploads';

function AddContent() {
  return (
    <section className="">
      <h2 className="mb-6 text-2xl font-medium">Add Note:</h2>

      <div>
        <div className="mb-4">
          <InputNote />
        </div>
        <div className="mb-8">
          <Uploads />
        </div>
        <UseContentInput />
      </div>
    </section>
  );
}

export default AddContent;
