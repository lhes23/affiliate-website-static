import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import Gallery from "./components/Gallery"
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto">
      <Jumbotron />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
