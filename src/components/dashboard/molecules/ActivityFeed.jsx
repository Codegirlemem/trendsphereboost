import PostFeed from './PostFeed';
import { posts } from '../data/postsFeed';

function ActivityFeed() {
  return (
    <section className="ml-8 mt-6 flex flex-col gap-6 px-4 py-6 font-montserrat text-[21px]">
      <h2 className="text-2xl font-medium">Recent Activity Feed:</h2>

      {posts.map((post, index) => (
        <PostFeed key={index} post={post} />
      ))}
    </section>
  );
}

export default ActivityFeed;
