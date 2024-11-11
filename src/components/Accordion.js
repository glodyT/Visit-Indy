import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Popular Attractions",
      content: "Visit the Indianapolis Motor Speedway, Children's Museum, and White River State Park."
    },
    {
      title: "Local Dining",
      content: "Explore famous St. Elmo Steak House, Milktooth, and Bluebeard restaurants."
    },
    {
      title: "Events & Festivals",
      content: "Experience the Indy 500, Indiana State Fair, and GenCon throughout the year."
    },
    {
      title: "Outdoor Activities",
      content: "Enjoy nature walks at Eagle Creek Park, biking along the Cultural Trail, and paddle boating on the Canal."
    }
  ];

  return (
    <div className="p-3 w-full flex items-center justify-center">
      <div className="w-full divide-y divide-slate-300 overflow-hidden rounded-xl border border-slate-300 bg-slate-100/40 text-slate-700 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
        {items.map((item, index) => (
          <div key={index} className="divide-y divide-slate-300 dark:divide-slate-700">
            <button
              id={`controlsAccordionItem${index}`}
              type="button"
              className="flex w-full items-center justify-between gap-4 bg-slate-100 p-4 text-left hover:bg-slate-100/75 dark:bg-slate-800 dark:hover:bg-slate-800/75"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {item.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                className={`size-5 shrink-0 transition ${activeIndex === index ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-sm sm:text-base text-pretty">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
