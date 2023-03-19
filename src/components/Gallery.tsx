import React from "react"
import meats from "../meats.json"

const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          {meats
            .map((meat) => (
              <div key={meat.id}>
                <a
                  href={`${import.meta.env.VITE_AFF_BASE}${meat.link}?aff=${
                    import.meta.env.VITE_AFF_ID
                  }`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="w-full h-full rounded-lg ease-in-out duration-300 hover:scale-105 hover:shadow"
                    alt={meat.name}
                    src={`./src/assets/imgs/${meat.img}`}
                  />
                </a>
              </div>
            ))
            .reverse()}
        </div>
        <div className="grid gap-4">
          {meats.map((meat) => (
            <div key={meat.id}>
              <a
                href={`${import.meta.env.VITE_AFF_BASE}${meat.link}?aff=${
                  import.meta.env.VITE_AFF_ID
                }`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="w-full h-auto rounded-lg ease-in-out duration-300 hover:scale-105 hover:shadow"
                  alt={meat.name}
                  src={`./src/assets/imgs/${meat.img}`}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {meats
            .map((meat) => (
              <div key={meat.id}>
                <a
                  href={`${import.meta.env.VITE_AFF_BASE}${meat.link}?aff=${
                    import.meta.env.VITE_AFF_ID
                  }`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="w-full h-full rounded-lg ease-in-out duration-300 hover:scale-105 hover:shadow"
                    alt={meat.name}
                    src={`./src/assets/imgs/${meat.img}`}
                  />
                </a>
              </div>
            ))
            .reverse()}
        </div>
        <div className="grid gap-4">
          {meats.map((meat) => (
            <div key={meat.id}>
              <a
                href={`${import.meta.env.VITE_AFF_BASE}${meat.link}?aff=${
                  import.meta.env.VITE_AFF_ID
                }`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="w-full h-full rounded-lg ease-in-out duration-300 hover:scale-105 hover:shadow"
                  alt={meat.name}
                  src={`./src/assets/imgs/${meat.img}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
