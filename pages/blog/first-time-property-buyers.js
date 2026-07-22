import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FirstTimePropertyBuyers() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-orange transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-orange transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-dark-blue font-semibold">5 Tips for First-Time Property Buyers</span>
            </div>
          </motion.div>

          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-blue to-orange p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">Real Estate Tips</span>
                  <span className="text-sm">March 10, 2025</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">5 Tips for First-Time Property Buyers</h1>
                <p className="text-xl text-white/90">Essential guidance to make your first property purchase a success</p>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 bg-gray-200">
                <img 
                  src="/images/_ (36).jpeg" 
                  alt="First-Time Property Buyers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Buying your first property is an exciting milestone, but it can also be overwhelming. Whether you're looking for land in Kapeeka, a house in Seeta, or an apartment in Mukono, these essential tips will help you navigate the process with confidence.
                  </p>

                  {/* Tip 1 */}
                  <div className="bg-gradient-to-r from-orange/5 to-orange/10 rounded-xl p-8 mb-8 border-l-4 border-orange">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Set a Realistic Budget</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Before you start property hunting, determine how much you can afford. Consider not just the purchase price, but also:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <i className="fas fa-check text-orange mt-1"></i>
                            <span><strong>Down payment:</strong> Typically 20-30% of the property value in Uganda</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <i className="fas fa-check text-orange mt-1"></i>
                            <span><strong>Legal fees:</strong> Lawyer fees, stamp duty, and registration costs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <i className="fas fa-check text-orange mt-1"></i>
                            <span><strong>Survey costs:</strong> Land survey and valuation fees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <i className="fas fa-check text-orange mt-1"></i>
                            <span><strong>Moving costs:</strong> Transportation and setup expenses</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <i className="fas fa-check text-orange mt-1"></i>
                            <span><strong>Emergency fund:</strong> Keep 3-6 months of expenses saved</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-white rounded-lg border border-orange/20">
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-lightbulb text-orange mr-2"></i>
                            <strong>Pro Tip:</strong> At AMODZ Properties, we offer flexible payment plans to help you manage your budget effectively. Contact us to discuss options that work for you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 2 */}
                  <div className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 rounded-xl p-8 mb-8 border-l-4 border-primary-blue">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Choose the Right Location</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Location is crucial for property value appreciation and your quality of life. Consider these factors:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold text-dark-blue mb-2">
                              <i className="fas fa-road text-primary-blue mr-2"></i>
                              Accessibility
                            </h4>
                            <p className="text-sm text-gray-600">Proximity to main roads, public transport, and Kampala city center</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold text-dark-blue mb-2">
                              <i className="fas fa-hospital text-primary-blue mr-2"></i>
                              Amenities
                            </h4>
                            <p className="text-sm text-gray-600">Schools, hospitals, shopping centers, and markets nearby</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold text-dark-blue mb-2">
                              <i className="fas fa-shield-alt text-primary-blue mr-2"></i>
                              Security
                            </h4>
                            <p className="text-sm text-gray-600">Safe neighborhood with good lighting and security presence</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-bold text-dark-blue mb-2">
                              <i className="fas fa-chart-line text-primary-blue mr-2"></i>
                              Growth Potential
                            </h4>
                            <p className="text-sm text-gray-600">Areas with development plans and infrastructure projects</p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-white rounded-lg border border-primary-blue/20">
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-map-marked-alt text-primary-blue mr-2"></i>
                            <strong>Our Locations:</strong> Kapeeka, Seeta, and Mukono offer excellent growth potential with titled land, accessible roads, and proximity to essential amenities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 3 */}
                  <div className="bg-gradient-to-r from-orange/5 to-orange/10 rounded-xl p-8 mb-8 border-l-4 border-orange">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Verify Land Title and Documentation</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          This is the most critical step to avoid fraud and legal issues. Always verify:
                        </p>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border-l-4 border-orange">
                            <h4 className="font-bold text-dark-blue mb-2">Land Title Verification</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• Visit the Ministry of Lands to confirm title authenticity</li>
                              <li>• Check for any encumbrances or disputes on the land</li>
                              <li>• Verify the seller's name matches the title deed</li>
                              <li>• Ensure boundaries match the survey plan</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-orange">
                            <h4 className="font-bold text-dark-blue mb-2">Required Documents</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• Original land title (Mailo, Freehold, or Leasehold)</li>
                              <li>• Survey plan and coordinates</li>
                              <li>• Land valuation report</li>
                              <li>• Local council (LC) letter</li>
                              <li>• Tax clearance certificate</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                          <p className="text-sm text-red-800">
                            <i className="fas fa-exclamation-triangle text-red-600 mr-2"></i>
                            <strong>Warning:</strong> Never pay full amount before verifying documents. Always use a reputable lawyer for due diligence.
                          </p>
                        </div>
                        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm text-green-800">
                            <i className="fas fa-check-circle text-green-600 mr-2"></i>
                            <strong>AMODZ Guarantee:</strong> All our properties come with verified titles and complete documentation. We provide legal support throughout the purchase process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 4 */}
                  <div className="bg-gradient-to-r from-primary-blue/5 to-primary-blue/10 rounded-xl p-8 mb-8 border-l-4 border-primary-blue">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">4</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Conduct Physical Site Inspection</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Never buy property without visiting the site in person. During your visit, check:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <i className="fas fa-check-circle text-primary-blue mt-1"></i>
                              <div>
                                <strong className="text-dark-blue">Physical Boundaries:</strong>
                                <p className="text-sm text-gray-600">Walk the perimeter and verify with survey plan</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <i className="fas fa-check-circle text-primary-blue mt-1"></i>
                              <div>
                                <strong className="text-dark-blue">Terrain & Soil:</strong>
                                <p className="text-sm text-gray-600">Check for swamps, slopes, or rocky areas</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <i className="fas fa-check-circle text-primary-blue mt-1"></i>
                              <div>
                                <strong className="text-dark-blue">Access Roads:</strong>
                                <p className="text-sm text-gray-600">Verify road condition and accessibility year-round</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <i className="fas fa-check-circle text-primary-blue mt-1"></i>
                              <div>
                                <strong className="text-dark-blue">Utilities:</strong>
                                <p className="text-sm text-gray-600">Check availability of water, electricity, internet</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <i className="fas fa-check-circle text-primary-blue mt-1"></i>
                              <div>
                                <strong className="text-dark-blue">Neighborhood:</strong>
                                <p className="text-sm text-gray-600">Talk to neighbors about the area and any issues</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <i className="fas fa-check-circle text-primary-blue mt-1"></i>
                              <div>
                                <strong className="text-dark-blue">Development:</strong>
                                <p className="text-sm text-gray-600">Check surrounding developments and future plans</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-white rounded-lg border border-primary-blue/20">
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-calendar-check text-primary-blue mr-2"></i>
                            <strong>Free Site Visits:</strong> We organize free site visits to all our locations. Contact us to schedule your visit to Kapeeka, Seeta, or Mukono.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tip 5 */}
                  <div className="bg-gradient-to-r from-orange/5 to-orange/10 rounded-xl p-8 mb-8 border-l-4 border-orange">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">5</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Work with Reputable Real Estate Agents</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          A trustworthy real estate company can save you time, money, and stress. Look for:
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                            <i className="fas fa-certificate text-orange text-xl mt-1"></i>
                            <div>
                              <h4 className="font-bold text-dark-blue mb-1">Proper Registration</h4>
                              <p className="text-sm text-gray-600">Verify company registration with URSB and membership in real estate associations</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                            <i className="fas fa-star text-orange text-xl mt-1"></i>
                            <div>
                              <h4 className="font-bold text-dark-blue mb-1">Track Record</h4>
                              <p className="text-sm text-gray-600">Check reviews, testimonials, and completed projects</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                            <i className="fas fa-handshake text-orange text-xl mt-1"></i>
                            <div>
                              <h4 className="font-bold text-dark-blue mb-1">Transparency</h4>
                              <p className="text-sm text-gray-600">Clear pricing, no hidden fees, and honest communication</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg flex items-start gap-3">
                            <i className="fas fa-headset text-orange text-xl mt-1"></i>
                            <div>
                              <h4 className="font-bold text-dark-blue mb-1">After-Sales Support</h4>
                              <p className="text-sm text-gray-600">Assistance with documentation, construction, and property management</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-6 bg-gradient-to-r from-primary-blue to-orange rounded-lg text-white">
                          <h4 className="font-bold text-xl mb-2">Why Choose AMODZ Properties?</h4>
                          <ul className="space-y-2 text-sm">
                            <li>✓ Founded in 2022 by Amoding Magret, Finance graduate from Makerere University</li>
                            <li>✓ Verified titled land in prime locations (Kapeeka, Seeta, Mukono)</li>
                            <li>✓ Flexible payment plans tailored to your budget</li>
                            <li>✓ Free legal support and documentation assistance</li>
                            <li>✓ Transparent pricing with no hidden costs</li>
                            <li>✓ Construction and property management services available</li>
                            <li>✓ Dedicated customer support throughout your journey</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gray-50 rounded-xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-dark-blue mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Buying your first property is a significant investment that requires careful planning and due diligence. By following these five essential tips, you'll be well-prepared to make an informed decision and secure a property that meets your needs and budget.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Remember, the key to a successful property purchase is working with trustworthy professionals who have your best interests at heart. At AMODZ Properties Limited, we're committed to making your dream of property ownership a reality.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-orange to-orange-600 rounded-xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Buy Your First Property?</h3>
                    <p className="text-lg mb-6">Let our experienced team guide you through every step of the process.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-orange px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                          <i className="fas fa-phone mr-2"></i>
                          Contact Us Today
                        </motion.button>
                      </Link>
                      <Link href="/properties">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors"
                        >
                          <i className="fas fa-home mr-2"></i>
                          View Properties
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-dark-blue mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <h4 className="font-bold text-dark-blue mb-2">Understanding Land Titles in Uganda</h4>
                  <p className="text-sm text-gray-600 mb-4">Learn about different types of land titles and what they mean for property buyers.</p>
                  <span className="text-orange font-semibold text-sm">Read More →</span>
                </div>
              </Link>
              <Link href="/blog">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <h4 className="font-bold text-dark-blue mb-2">Investment Opportunities in Mukono</h4>
                  <p className="text-sm text-gray-600 mb-4">Discover why Mukono is becoming a hotspot for real estate investment.</p>
                  <span className="text-orange font-semibold text-sm">Read More →</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
