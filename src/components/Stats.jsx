import React from "react";

function Stats() {
  return (
    <div className="bg-[var(--background-color-light-blue)]">
      <div className="py-5 w-3/4 mx-auto px-4 flex justify-between gap-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4">
          <h4 className="text-center font-extrabold text-[var(--background-color-blue)]">
            325
          </h4>
          <h4 className="text-center font-extrabold">Course</h4>
        </div>

        <div className="bg-white p-4">
          <h4 className="text-center font-extrabold text-[var(--background-color-blue)]">
            405
          </h4>
          <h4 className="text-center font-extrabold">Work Out</h4>
        </div>

        <div className="bg-white p-4">
          <h4 className="text-center font-extrabold text-[var(--background-color-blue)]">
            305
          </h4>
          <h4 className="text-center font-extrabold">Working Hour</h4>
        </div>

        <div className="bg-white p-4">
          <h4 className="text-center font-extrabold text-[var(--background-color-blue)]">
            705
          </h4>
          <h4 className="text-center font-extrabold">Happy Client</h4>
        </div>
      </div>
    </div>
  );
}

export default Stats;
