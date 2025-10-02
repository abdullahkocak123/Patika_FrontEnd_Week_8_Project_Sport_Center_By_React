import React from "react";

function Main() {
  return (
    <main className="pt-50 w-3/4 mx-auto px-4">
      <button className="text-white bg-[var(--background-color-blue)] font-bold px-2 py-1 rounded">
        POWERFULL
      </button>
      <h1 className="text-7xl font-bold text-white">GROUP</h1>
      <h1 className="text-7xl font-bold text-white">PRACTICE</h1>
      <h1 className="text-7xl font-bold text-white">WITH TRAINER</h1>

      <p className="text-xl font-bold text-white bg-black/50 p-4 my-2 rounded">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic possimus
        exercitationem eos minima quis, eius aperiam magni! Dolorum cupiditate
        assumenda ducimus sapiente quibusdam omnis adipisci. Qui corporis
        voluptatem dignissimos aliquid.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="text-white bg-[var(--background-color-blue)] font-bold w-full sm:w-auto px-4 py-1 rounded mx-auto sm:mx-0 text-left">
          Sign Up
        </button>
        <button className="text-white font-bold w-full sm:w-auto px-4 py-1 rounded mx-auto sm:mx-0 text-left border">
          Details
        </button>
      </div>
    </main>
  );
}

export default Main;
