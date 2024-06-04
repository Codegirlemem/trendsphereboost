import { useEffect, useRef, useState } from 'react';
import { contents } from '../data/dataIdeas';
import CategoryBank from '../molecules/CategoryBank';
import { fetchData } from '../../../utils/fetchData';
import Category from '../content-bank/Category';

function SavedIdeas() {
  const controllerRef = useRef(null);
  const [showCategory, setShowCategory] = useState(false);

  const [savedContents, setSavedContents] = useState({
    mediaCampaign: '',
    engagementBoosters: '',
    inspirations: '',
    contentSeries: '',
  });

  useEffect(() => {
    fetchData('https://opentdb.com/api.php?amount=50', controllerRef)
      .then((data) =>
        setSavedContents((prev) => ({ ...prev, engagementBoosters: data })),
      )
      .catch((err) => console.log(err));
  }, []);

  // CREATE A DATABASE THAT HOLDS THESE updatedCategories OBJECT.
  // THE 4 CATEGORIES HERE ARE THE DEFAULT CATEGORIES THAT TRENDSPHEREBOOST OFFERS
  // THE contents property of the updatedCategories variable should hold default objects which will be used to provide users with content
  // FOR NOW I AM USING A PUBLIC API TO GET CONTENTS TO BE STORED IN THE updatedCatgories.contents but when OUR backend is fully functional these contents should be gotten from our own API
  // USER SHOULD BE ABLE TO ALSO ADD THEIR OWN CONTENTS TO updatedCategory.content.

  //  DEPENDING ON THE CATEFGORY TYPE, THE FORMAT TO ADD CONTENTS SHOULD BE UNIFORM.EXAMPLE FOR ENGAGEMENT BOOSTERS CATEGORY THE QUIZES HSOULD BE AN OBJECT WITH PROPERTIES LIKE "question", "answer", "type", "category", "difficulty" etc

  const updatedCategories = contents.map((item) => {
    item.showContents = false;

    const itemCategory = item.category;
    switch (itemCategory) {
      case 'Social Media Campaign':
        return { ...item, contents: savedContents.mediaCampaign };
      case 'Engagement Boosters':
        return { ...item, contents: savedContents.engagementBoosters };
      case 'Content Series':
        return { ...item, contents: savedContents.contentSeries };
      case 'Inspiration Corner':
        return { ...item, contents: savedContents.inspirations };
      default:
        return { ...item, contents: '' };
    }
  });

  return (
    <section className="w-max font-montserrat">
      {showCategory ? (
        <Category />
      ) : (
        <div>
          <h2 className="mb-6 text-2xl font-medium">Saved Ideas</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10">
            {updatedCategories.map((category) => (
              <CategoryBank
                key={category.title}
                category={category}
                show={setShowCategory}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SavedIdeas;
