const Stats = () => {
  const stats = [
    { label: "Annual Visitors", value: "1.6M" },
    { label: "Local Attractions", value: "19.2K" },
    { label: "Hotels", value: "4.9K" },
    { label: "Restaurants", value: "166.7K" }
  ];

  return (
    <div className="bg-gray-200 py-16 w-full dark:bg-gray-700 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-12 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Indianapolis Tourism Statistics
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
