import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Blog />
      </div>
      <Footer />
    </>
  )
}
