import Gallery from "./components/Gallery"
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"
import bgWallpaper from "/assets/imgs/bg-wallpaper.jpg"

function App() {
  document.title = import.meta.env.VITE_SITE_NAME
  return (
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
  )
}

export default App
