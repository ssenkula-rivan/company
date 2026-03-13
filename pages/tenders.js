import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tenders from '../components/Tenders'

export default function TendersPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Tenders />
      </div>
      <Footer />
    </>
  )
}
