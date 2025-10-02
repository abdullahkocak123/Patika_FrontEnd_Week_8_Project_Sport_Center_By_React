import React from "react";

const Trainers = () => {
  return (
    <section
      className="bg-[var(--background-color-light-blue)] pb-10"
      id="trainers"
    >
      <h1 className="text-center font-extrabold text-[var(--background-color-blue)] pt-10 text-3xl">
        OUR BEST TRAINERS
      </h1>
      <hr className="border-4 text-[var(--background-color-orange)] w-[70px] mx-auto my-6 rounded" />
      <p className="text-center font-bold text-[var(--text-color-gray)] pt-5 max-w-xl mx-auto px-10">
        Lorem ipsum is not only simly random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center m-10 gap-30">
        {/* Trainer-1 */}
        <div className="group flex justify-center items-center relative">
          {/* Horizontal Rectangle */}
          <div className="absolute z-1 bg-[var(--background-color-blue)] w-55 h-20 transition-all duration-500 group-hover:h-30"></div>

          {/* Vertical Rectangle */}
          <div className="absolute z-2 bg-[var(--background-color-blue)] w-20 h-63"></div>

          {/* Trainer image */}
          <img
            src="images/trainer1.jpg"
            alt="trainer1"
            className="relative z-3 w-50 h-auto object-contain border-2 border-[var(--background-color-orange)] rounded"
          />

          <div className="absolute opacity-0 translate-y-5 transition-all duration-500 ease-out bg-[var(--background-color-blue)] w-45 h-10 z-30 mt-40 group-hover:opacity-100 group-hover:translate-y-0 flex justify-center items-center"></div>

          <div className="absolute opacity-0 translate-y-5 transition-all duration-500 ease-out bg-[var(--background-color-blue)] w-35 h-15 z-30 mt-40 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col justify-center items-center">
            <h2 className="z-4 text-white font-bold text-center mt-2">
              Jane Doe
            </h2>
            <h3 className="z-5 text-white font-bold text-center text-xs">
              Cardio Trainer
            </h3>
          </div>
        </div>

        {/* Trainer-2 */}
        <div className="group flex justify-center items-center relative">
          <div className="absolute z-1 bg-[var(--background-color-blue)] w-55 h-20 transition-all duration-500 group-hover:h-30"></div>
          <div className="absolute z-2 bg-[var(--background-color-blue)] w-20 h-63"></div>
          <img
            src="images/trainer2.jpg"
            alt="trainer2"
            className="relative z-3 w-50 h-auto object-contain border-2 border-[var(--background-color-orange)] rounded"
          />
          <div className="absolute opacity-0 translate-y-5 transition-all duration-500 ease-out bg-[var(--background-color-blue)] w-45 h-10 z-30 mt-40 group-hover:opacity-100 group-hover:translate-y-0 flex justify-center items-center"></div>
          <div className="absolute opacity-0 translate-y-5 transition-all duration-500 ease-out bg-[var(--background-color-blue)] w-35 h-15 z-30 mt-40 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col justify-center items-center">
            <h2 className="z-4 text-white font-bold text-center mt-2">
              Joe Doe
            </h2>
            <h3 className="z-5 text-white font-bold text-center text-xs">
              Cardio Trainer
            </h3>
          </div>
        </div>

        {/* Trainer-3 */}
        <div className="group flex justify-center items-center relative">
          <div className="absolute z-1 bg-[var(--background-color-blue)] w-55 h-20 transition-all duration-500 group-hover:h-30"></div>
          <div className="absolute z-2 bg-[var(--background-color-blue)] w-20 h-63"></div>
          <img
            src="images/trainer3.jpg"
            alt="trainer3"
            className="relative z-3 w-50 h-auto object-contain border-2 border-[var(--background-color-orange)] rounded"
          />
          <div className="absolute opacity-0 translate-y-5 transition-all duration-500 ease-out bg-[var(--background-color-blue)] w-45 h-10 z-30 mt-40 group-hover:opacity-100 group-hover:translate-y-0 flex justify-center items-center"></div>
          <div className="absolute opacity-0 translate-y-5 transition-all duration-500 ease-out bg-[var(--background-color-blue)] w-35 h-15 z-30 mt-40 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col justify-center items-center">
            <h2 className="z-4 text-white font-bold text-center mt-2">
              Jane Doe
            </h2>
            <h3 className="z-5 text-white font-bold text-center text-xs">
              Cardio Trainer
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
