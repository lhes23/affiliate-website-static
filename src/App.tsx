import Gallery from "./components/Gallery"
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"
import bgWallpaper from "/assets/imgs/bg-wallpaper.jpg"
import { Suspense } from "react"
import { RotatingLines } from "react-loader-spinner"

function App() {
  document.title = import.meta.env.VITE_SITE_NAME
  return (
    <Suspense
      fallback={
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      }
    >
      <div
        className=""
        style={{
          backgroundImage: `url(${bgWallpaper})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto">
          <Jumbotron />
          <Gallery />
          <Footer />
        </div>
      </div>
    </Suspense>
  )
}

export default App
