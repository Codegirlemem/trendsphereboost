import Post8days from '../../../assets/dashboard/images/post8days.png';
import Post7days from '../../../assets/dashboard/images/posts7days.png';
import Post10days from '../../../assets/dashboard/images/post10days.png';

const rate = 'Engagement Rate';
const Date = 'Date Posted';

export const posts = [
  {
    image: Post8days,
    activity: {
      Reach: '14,000',
      Reactions: '1.2k',
      Comments: '255',
      Reposts: '37',
      [rate]: '88%',
      [Date]: '8 days ago',
    },
  },
  {
    image: Post7days,
    activity: {
      Reach: '9,000',
      Reactions: '7k',
      Comments: '180',
      Reposts: '25',
      [rate]: '85%',
      [Date]: '7 days ago',
    },
  },
  {
    image: Post10days,
    activity: {
      Reach: '16,000',
      Reactions: '1.5k',
      Comments: '275',
      Reposts: '40',
      [rate]: '70%',
      [Date]: '10 days ago',
    },
  },
];
