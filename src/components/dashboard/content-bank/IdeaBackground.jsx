import { Link } from 'react-router-dom';
import { changeCasing, reduceWords } from '../../../utils/getNames';

function IdeaBackground({ category, show }) {
  // function getContents() {
  //   console.log(category.contents);
  //   console.log(category);
  //   show((prev) => !prev);
  // }

  const param = reduceWords(category.category, '-');
  // const param = category.category;
  console.log(param);

  return (
    <figure
      className="relative mb-2  h-[184px] w-full bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${category.image})` }}
    >
      <Link
        to={param}
        className="absolute right-4 top-2 cursor-pointer text-xs font-medium underline"
      >
        View
      </Link>

      <h3 className="absolute right-6 top-[75px] w-[219px] bg-[#00000045] p-2 text-base font-bold">
        {category.category}:{' '}
        <span className="font-medium">{category.title}</span>
      </h3>
    </figure>
  );
}

export default IdeaBackground;
