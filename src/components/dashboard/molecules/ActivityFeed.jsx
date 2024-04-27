import PostFeed from './PostFeed';
import { posts } from '../data/postsFeed';
import { useAccountsProvider } from '../../../context/AccountsProvider';

function ActivityFeed() {
  const {
    account: { userType },
  } = useAccountsProvider();

  return (
    <section className="ml-0 mt-6 flex flex-col gap-6 px-4 py-6 font-montserrat text-[21px]">
      <h2 className="text-2xl font-medium">Recent Activity Feed:</h2>

      {userType === 'new'
        ? ' '
        : posts.map((post, index) => <PostFeed key={index} post={post} />)}
    </section>
  );
}

export default ActivityFeed;
