import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Contact />
      </div>
      <Footer />
    </>
  )
}
