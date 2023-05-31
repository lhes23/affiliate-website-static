import React from "react"
import meats from "../meats.json"

const Gallery = () => {
  const meatMap = meats.map((meat) => (
    <div
      key={meat.id}
      className="relative hover:scale-105 hover:shadow ease-in-out duration-300"
    >
      <a
        href={`${import.meta.env.VITE_AFF_BASE}${meat.link}?${
          import.meta.env.VITE_AFF_PARAM
        }=${import.meta.env.VITE_AFF_ID}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="w-full h-full rounded-lg shadow"
          alt={meat.name}
          src={`/assets/imgs/${meat.img}`}
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-br-lg rounded-bl-lg">
          <h3 className="text-sm text-white font-bold truncate">{meat.name}</h3>
          <p className="mt-2 text-xs text-gray-300 truncate">
            {meat.description}
          </p>
        </div>
      </a>
    </div>
  ))

  const meatMapReverse = meats
    .map((meat) => (
      <div
        key={meat.id}
        className="relative hover:scale-105 hover:shadow ease-in-out duration-300"
      >
        <a
          href={`${import.meta.env.VITE_AFF_BASE}${meat.link}?${
            import.meta.env.VITE_AFF_PARAM
          }=${import.meta.env.VITE_AFF_ID}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="w-full h-full rounded-lg shadow"
            alt={meat.name}
            src={`/assets/imgs/${meat.img}`}
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-br-lg rounded-bl-lg">
            <h3 className="text-sm text-white font-bold truncate">
              {meat.name}
            </h3>
            <p className="mt-2 text-xs text-gray-300 truncate">
              {meat.description}
            </p>
          </div>
        </a>
      </div>
    ))
    .reverse()

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">{meatMapReverse}</div>
        <div className="grid gap-4">{meatMap}</div>
        <div className="grid gap-4">{meatMapReverse}</div>
        <div className="grid gap-4">{meatMap}</div>
      </div>
    </div>
  )
}

export default Gallery
