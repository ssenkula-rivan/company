import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Services />
      </div>
      <Footer />
    </>
  )
}
