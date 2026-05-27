import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MissionVision from '../components/MissionVision'
import Team from '../components/Team'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <div className="container mx-auto px-4 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-dark-blue mb-4">About AMODZ Properties</h1>
            <p className="text-xl text-gray-600">Learn more about our company, mission, and team</p>
          </motion.div>
        </div>

        <MissionVision />
        <Team />
      </div>
      <Footer />
    </>
  )
}
