import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <FAQ />
      </div>
      <Footer />
    </>
  )
}
