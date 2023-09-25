import React from "react"

const Card = ({ meat }: { meat: any }) => {
  // name, permalink,imgSrc, price,
  return (
    <>
      <div className="relative hover:scale-105 hover:shadow ease-in-out duration-300">
        <a
          href={`${meat.permalink}?${import.meta.env.VITE_AFF_PARAM}=${
            import.meta.env.VITE_AFF_ID
          }`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="w-full h-full rounded-lg shadow"
            alt={meat.name}
            src={`${meat.images[0].src}`}
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-br-lg rounded-bl-lg">
            <h3 className="text-sm text-white font-bold truncate">
              {meat.name}
            </h3>
            <p className="mt-2 text-xs text-gray-300 truncate">
              $ {meat.price}
            </p>
          </div>
        </a>
      </div>
    </>
  )
}

export default Card
