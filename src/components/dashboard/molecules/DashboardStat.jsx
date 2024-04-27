import { useAccountsProvider } from '../../../context/AccountsProvider';
import StatFigure from '../atom/StatFigure';
import { stats } from '../data/accountStat';

function DashboardStat() {
  const {
    account: { userType },
  } = useAccountsProvider();

  return (
    <section className="ml-[22px]">
      <h2 className="mb-2 mt-10 text-2xl font-medium text-black">
        Quick Stats:
      </h2>

      <div className="flex  flex-row gap-5 p-4 lg:gap-16">
        {userType === 'new'
          ? ' '
          : stats.map((stat) => (
              <StatFigure key={stat.title} data={stat} />
            ))}{' '}
      </div>
    </section>
  );
}

export default DashboardStat;
