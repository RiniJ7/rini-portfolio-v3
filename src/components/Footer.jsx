import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 py-4 sm:py-6 md:py-8">
      <footer className="bg-gray-200 text-center text-white dark:text-neutral-200 w-full">
        <div className="container p-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
                alt="image1"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                className="w-full rounded-md shadow-lg"
                alt="image2"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                className="w-full rounded-md shadow-lg"
                alt="image3"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                className="w-full rounded-md shadow-lg"
                alt="image4"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                className="w-full rounded-md shadow-lg"
                alt="image5"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                className="w-full rounded-md shadow-lg"
                alt="image6"
              />
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 mt-4">
          © 2024 Copyright:
          <a className="dark:text-neutral-400" href="https://tw-elements.com/">
            Rini Joy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
