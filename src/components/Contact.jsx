import React from "react";

const Contact = () => {
  return (
    <section className="pb-10" id="contact">
      <h1 className="text-center font-extrabold text-[var(--background-color-blue)] pt-10 text-3xl">
        CONTACT US
      </h1>
      <hr className="border-4 text-[var(--background-color-orange)] w-[70px] mx-auto my-6 rounded" />
      <p className="text-center font-bold text-[var(--text-color-gray)] pt-5 max-w-xl mx-auto px-10">
        Lorem ipsum is not only simly random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center m-10 gap-20">
        <div>
          <div className="flex flex-row gap-10">
            <div className="font-bold text-[var(--text-color-gray)]">
              <h3>Mobile Number</h3>
              <h3 className="text-xs">+135 773 4442</h3>
            </div>
            <div className="font-bold text-[var(--text-color-gray)]">
              <h3>Email Address</h3>
              <h3 className="text-xs">demo@demo.com</h3>
            </div>
          </div>

          <h2 className="font-bold text-[var(--text-color-gray)] text-xl my-5">
            Make An Appointment
          </h2>

          <input
            type="text"
            className="bg-[var(--background-color-light-blue)] w-80 p-1 text-xs"
            placeholder="Your Name"
          />
          <br />
          <input
            type="text"
            className="bg-[var(--background-color-light-blue)] w-80 my-5 p-1 text-xs"
            placeholder="Your Email"
          />
          <br />
          <textarea
            className="bg-[var(--background-color-light-blue)] w-80 p-1 pb-10 text-xs"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div>
          <iframe
            className="w-100 h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5441.100939001177!2d-70.56241918998046!3d41.45566892549219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5290c1c01e877%3A0x86190a32ed45264b!2sOcean%20Park!5e0!3m2!1sen!2str!4v1756641286295!5m2!1sen!2str"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location-map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
