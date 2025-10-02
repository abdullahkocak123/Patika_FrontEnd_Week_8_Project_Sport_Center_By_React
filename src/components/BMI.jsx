import { useState, useEffect } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    if (height && weight) {
      const h = height / 100; // cm -> m
      const calculatedBmi = weight / (h * h);
      setBmi(calculatedBmi.toFixed(1));
    }
  }, [height, weight]);

  return (
    <section className="py-20 w-3/4 mx-auto">
      <div className="flex flex-col sm:flex-row mt-10 gap-20">
        <div className="w-full sm:w-1/2 flex flex-col text-justify">
          <h1 className="text-left font-extrabold text-[var(--background-color-blue)] text-3xl">
            BMI Calculator
          </h1>
          <p className="my-4 font-bold text-[var(--text-color-gray)]">
            Enter your height and weight to calculate BMI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 sm:w-1/2">
              <input
                className="border-2 rounded px-1"
                type="number"
                placeholder="Your Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <p>cm</p>
            </div>
            <div className="flex items-center gap-2 sm:w-1/2">
              <input
                className="border-2 rounded px-1"
                type="number"
                placeholder="Your Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <p>kg</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h2 className="text-center font-bold my-2 text-xl">
            Your BMI: {bmi}
          </h2>
          <div className="relative w-full">
            <img
              src="images/bmi-index.jpg"
              alt="bmi-index"
              className="w-full h-auto"
            />
            <div
              id="bmi-indicator"
              className="absolute bottom-0 w-0 h-0 border-l-12 border-r-12 border-b-18 border-l-transparent border-r-transparent"
              style={{
                borderBottomColor: "var(--background-color-orange)",
                left: `${bmi * 2}%`,
                transform: "translateX(-50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BMI;
