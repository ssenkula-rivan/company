import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Gallery />
      </div>
      <Footer />
    </>
  )
}
