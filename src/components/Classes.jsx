import { useState } from "react";

function Classes() {
  const [activeTab, setActiveTab] = useState("yoga");

  const tabs = [
    { id: "yoga", label: "Yoga" },
    { id: "group", label: "Group" },
    { id: "solo", label: "Solo" },
    { id: "stretching", label: "Stretching" },
  ];

  return (
    <section id="classes" className="classes">
      <h1 className="text-center font-extrabold text-[var(--background-color-blue)] pt-10 text-3xl">
        OUR CLASSES
      </h1>
      <hr className="border-4 text-[var(--background-color-orange)] w-[70px] mx-auto my-6 rounded" />
      <p className="text-center font-bold text-[var(--text-color-gray)] pt-5 max-w-xl mx-auto px-10">
        Lorem ipsum is not only simly random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>

      <div className="py-20 w-3/4 mx-auto">
        {/* Buttons */}
        <div className="flex flex-wrap sm:flex-row justify-evenly gap-4 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn text-white bg-[var(--background-color-blue)] font-bold w-auto sm:w-auto px-4 py-1 rounded mx-auto sm:mx-0 text-left cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[var(--background-color-orange)]"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-content flex flex-col sm:flex-row m-10 gap-20 ${
              activeTab === tab.id ? "" : "hidden"
            }`}
          >
            <div className="w-full sm:w-1/2 flex flex-col text-justify">
              <h1 className="text-left font-extrabold text-[var(--text-color-gray)] text-2xl">
                {`Why choose ${tab.label}?`}
              </h1>
              <p className="my-2 font-bold text-[var(--text-color-gray)]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                src={`images/${tab.id}.jpg`}
                className="w-full max-w-full h-auto object-contain"
                alt={tab.label}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
