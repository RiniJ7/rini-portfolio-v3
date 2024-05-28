import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-gray-200">
         <footer
    className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
    <div className="container p-6">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <div className="mb-6 lg:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
            className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
            className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
            className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
            className="w-full rounded-md shadow-lg" />
        </div>
        <div className="mb-6 lg:mb-0">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
            className="w-full rounded-md shadow-lg" />
        </div>
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div
      className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      © 2024 Copyright:
      <a className="dark:text-neutral-400" href="https://tw-elements.com/"
      >Rini Joy</a>
    </div>

    {/* <div> Made with React.Rini Joy. &copy; 2024 </div> */}
  </footer>
     
      



      </div>
  )
}

export default Footer