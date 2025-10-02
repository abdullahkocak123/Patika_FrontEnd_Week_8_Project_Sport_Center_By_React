import React from "react";

const Review = () => {
  return (
    <section
      className="bg-[var(--background-color-light-blue)] pb-10"
      id="review"
    >
      <h1 className="text-center font-extrabold text-[var(--background-color-blue)] pt-10 text-3xl">
        REVIEW CLIENT
      </h1>
      <hr className="border-4 text-[var(--background-color-orange)] w-[70px] mx-auto my-6 rounded" />
      <p className="text-center font-bold text-[var(--text-color-gray)] pt-5 max-w-xl mx-auto px-10">
        Lorem ipsum is not only simly random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center m-10 gap-20">
        {/* Review Card-1 */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-row gap-2">
            <img
              src="images/client1.jpg"
              className="rounded-full w-12 h-12"
              alt="client1"
            />
            <div>
              <h6 className="font-bold">Diet Expert</h6>
              <h6 className="text-sm">CFO</h6>
            </div>
          </div>
          <div className="mt-2">
            <div className="w-100 bg-[var(--background-color-blue)] text-white text-xs p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              quidem voluptate nihil ipsa porro veritatis numquam accusantium.
              Nobis accusamus cupiditate, esse quis a soluta officiis quisquam
              provident iste asperiores dignissimos.
            </div>

            <div className="flex justify-between">
              <div className="w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#8096bc] border-l-transparent float-right"></div>
              <div className="w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#8096bc] border-r-transparent"></div>
            </div>
          </div>
        </div>

        {/* Review Card-2 */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-row gap-2">
            <img
              src="images/client2.jpg"
              className="rounded-full w-12 h-12"
              alt="client2"
            />
            <div>
              <h6 className="font-bold">Cardio Trainer</h6>
              <h6 className="text-sm">CEO</h6>
            </div>
          </div>
          <div className="mt-2">
            <div className="w-100 bg-[var(--background-color-blue)] text-white text-xs p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              quidem voluptate nihil ipsa porro veritatis numquam accusantium.
              Nobis accusamus cupiditate, esse quis a soluta officiis quisquam
              provident iste asperiores dignissimos.
            </div>

            <div className="flex justify-between">
              <div className="w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#8096bc] border-l-transparent float-right"></div>
              <div className="w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#8096bc] border-r-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
