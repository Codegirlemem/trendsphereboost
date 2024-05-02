import { useAccountsProvider } from '../../../context/AccountsProvider';
// import StatFigure from '../atom/StatFigure';
// import { stats } from '../data/accountStat';

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
        {/* {userType === 'new'
          ? ' '
          : stats.map((stat) => (
              <StatFigure key={stat.title} data={stat} />
            ))}{' '} */}

        {userType === 'new' ? (
          <p className="text-xl text-gray-500">
            No stat to display yet! Subscribe to start using our services.
          </p>
        ) : (
          <p className="text-xl text-gray-500">
            No stat to display yet! Connect your account and start using our
            sevices.
          </p>
        )}
      </div>
    </section>
  );
}

export default DashboardStat;
