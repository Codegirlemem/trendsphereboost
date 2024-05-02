import ActivityFeed from '../molecules/ActivityFeed';
import DashboardStat from '../molecules/DashboardStat';

function Overview() {
  return (
    <section className="mb-20">
      <DashboardStat />
      <ActivityFeed />
    </section>
  );
}

export default Overview;
