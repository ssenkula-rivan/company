import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Careers from '../components/Careers'

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Careers />
      </div>
      <Footer />
    </>
  )
}
