import React, { useEffect, useState } from "react"
import Card from "./Card"

const Gallery = () => {
  const [meats, setMeats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_AFF_BASE}/wp-json/wc/v3/products?consumer_key=${
          import.meta.env.VITE_CONSUMER_KEY
        }&consumer_secret=${import.meta.env.VITE_CONSUMER_SECRET}`
      )

      const data = await res.json()
      setMeats(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {meats &&
          meats.map((meat: any, i: number) => <Card key={i} meat={meat} />)}
      </div>
    </>
  )
}

export default Gallery
