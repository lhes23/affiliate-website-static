import React from "react"
import jumboHeader from "/assets/imgs/jumbo-header.jpg"

const Jumbotron = () => {
  return (
    <>
      {/* Jumbotron */}
      <div
        className="relative overflow-hidden lg:h-full h-1/2 rounded-lg bg-cover bg-no-repeat p-12 text-center mb-6"
        style={{
          backgroundImage: `url(${jumboHeader})`,
          height: 600,
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white p-4">
              <div>
                <h1 className="mb-4 text-3xl font-extrabold dark:text-white lg:text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-purple-400">
                    Best Meats
                  </span>{" "}
                  in San Diego, CA
                </h1>
                <p className="text-lg font-normal text-white lg:text-xl dark:text-gray-400 mx-auto my-16">
                  Indulge in the exquisite flavor of Wagyu beef, exclusively at
                  our meat shop.
                </p>
              </div>

              <a
                href={`${import.meta.env.VITE_AFF_BASE}?${
                  import.meta.env.VITE_AFF_PARAM
                }=${import.meta.env.VITE_AFF_ID}`}
                rel="noopener noreferrer"
                target="_blank"
                className="rounded border-2 border-gra px-7 pt-[10px] pb-[8px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-300 ease-in-out hover:border-neutral-100 hover:bg-gradient-to-tr from-purple-500 to-pink-500 hover:text-white focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              >
                <span className="hover:text-white ">SHOP NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </>
  )
}

export default Jumbotron
