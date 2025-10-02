import React from "react";

const Purchase = () => {
  return (
    <section className="pb-10" id="purchase">
      <h1 className="text-center font-extrabold text-[var(--background-color-blue)] pt-10 text-3xl">
        PURCHASE FROM US
      </h1>
      <hr className="border-4 text-[var(--background-color-orange)] w-[70px] mx-auto my-6 rounded" />
      <p className="text-center font-bold text-[var(--text-color-gray)] pt-5 max-w-xl mx-auto px-10">
        Lorem ipsum is not only simly random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center m-10 gap-5">
        {/* Purchase Card - 1 */}
        <div className="flex flex-col justify-center items-center rounded shadow-2xl w-60 bg-white mt-5 font-bold">
          <img
            src="images/purchase1.jpg"
            alt="purchase1"
            className="w-full h-auto object-contain rounded shadow-2xl"
          />
          <h3 className="text-xl">Kettlebell / 5kg</h3>
          <h6 className="text-xs">
            <span style={{ textDecoration: "line-through" }}>89,99$</span> /
            59,99$
          </h6>
          <div className="flex flex-row text-xs gap-10 mt-5 mb-2">
            <i className="fa-solid fa-cart-shopping"></i>
            <h6>Add To Cart</h6>
          </div>
        </div>

        {/* Purchase Card - 2 */}
        <div className="flex flex-col justify-center items-center rounded shadow-2xl w-60 bg-white mt-5 font-bold">
          <img
            src="images/purchase2.jpg"
            alt="purchase2"
            className="w-full h-auto object-contain rounded shadow-2xl"
          />
          <h3 className="text-xl">Treadmill</h3>
          <h6 className="text-xs">
            <span style={{ textDecoration: "line-through" }}>899,99$</span> /
            599,99$
          </h6>
          <div className="flex flex-row text-xs gap-10 mt-5 mb-2">
            <i className="fa-solid fa-cart-shopping"></i>
            <h6>Add To Cart</h6>
          </div>
        </div>

        {/* Purchase Card - 3 */}
        <div className="flex flex-col justify-center items-center rounded shadow-2xl w-60 bg-white mt-5 font-bold">
          <img
            src="images/purchase3.jpg"
            alt="purchase3"
            className="w-full h-auto object-contain rounded shadow-2xl"
          />
          <h3 className="text-xl">Adjustable Dumbell</h3>
          <h6 className="text-xs">
            <span style={{ textDecoration: "line-through" }}>89,99$</span> /
            59,99$
          </h6>
          <div className="flex flex-row text-xs gap-10 mt-5 mb-2">
            <i className="fa-solid fa-cart-shopping"></i>
            <h6>Add To Cart</h6>
          </div>
        </div>

        {/* Purchase Card - 4 */}
        <div className="flex flex-col justify-center items-center rounded shadow-2xl w-60 bg-white mt-5 font-bold">
          <img
            src="images/purchase4.jpg"
            alt="purchase4"
            className="w-full h-auto object-contain rounded shadow-2xl"
          />
          <h3 className="text-xl">Kettlebell / 3kg</h3>
          <h6 className="text-xs">
            <span style={{ textDecoration: "line-through" }}>89,99$</span> /
            59,99$
          </h6>
          <div className="flex flex-row text-xs gap-10 mt-5 mb-2">
            <i className="fa-solid fa-cart-shopping"></i>
            <h6>Add To Cart</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
