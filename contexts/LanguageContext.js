import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    services: 'Services',
    properties: 'Properties',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'AMODZ PROPERTIES LIMITED',
    heroTagline: 'Making your dream a living home.',
    getStarted: 'Get Started',
    viewProperties: 'View Properties',
    
    // Featured Properties
    featuredProperties: 'Featured Properties',
    featuredPropertiesDesc: 'Discover our handpicked selection of premium properties in prime locations across Uganda. From modern homes to commercial plots, find your perfect investment.',
    contactUs: 'Contact Us',
    viewAllProperties: 'View All Properties',
    
    // Plots & Land
    plotsLand: 'Plots & Land',
    plotsLandDesc: 'Secure your future with prime plots and land in strategic locations. From residential to commercial and agricultural land, we have the perfect plot for your investment.',
    contactAgent: 'Contact Agent',
    viewAllPlots: 'View All Plots',
    features: 'Features',
    available: 'Available',
    hotDeal: 'Hot Deal',
    
    // Services
    ourServices: 'Our Services',
    servicesDesc: 'Comprehensive real estate solutions tailored to your needs',
    
    // Testimonials
    whatClientsSay: 'What Our Clients Say',
    testimonialsDesc: 'Real stories from satisfied clients who found their dream properties with us',
    leaveReview: 'Leave a Review',
    yourName: 'Your name',
    rating: 'Rating',
    shareExperience: 'Share your experience...',
    postReview: 'Post Review',
    posting: 'Posting...',
    reviewSuccess: 'Thank you! Your review will be published after verification.',
    
    // Gallery
    videoGallery: 'Video Gallery',
    comingSoon: 'Coming Soon',
    
    // Projects
    ourProjects: 'Our Projects',
    projectsDesc: 'Explore our completed and ongoing development projects',
    
    // CEO
    meetOurCEO: 'Meet Our CEO',
    ceoDesc: 'Visionary leadership driving innovation in Uganda\'s real estate sector',
    
    // Team
    ourTeam: 'Our Team',
    teamDesc: 'Meet the professionals behind our success',
    
    // Statistics
    yearsExperience: 'Years Experience',
    happyClients: 'Happy Clients',
    propertiesSold: 'Properties Sold',
    projectsCompleted: 'Projects Completed',
    
    // Blog
    latestNews: 'Latest News & Tips',
    blogDesc: 'Stay updated with real estate insights and market trends',
    readMore: 'Read More',
    
    // FAQ
    frequentlyAsked: 'Frequently Asked Questions',
    faqDesc: 'Find answers to common questions about our services',
    
    // Careers
    joinOurTeam: 'Join Our Team',
    careersDesc: 'Build your career with Uganda\'s leading real estate company',
    applyNow: 'Apply Now',
    
    // Contact
    getInTouch: 'Get In Touch',
    contactDesc: 'Ready to find your dream property? Contact us today',
    sendMessage: 'Send Message',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    contactInfo: 'Contact Information',
    allRightsReserved: 'All rights reserved.',
    
    // Common
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    location: 'Location',
    price: 'Price',
    size: 'Size',
    status: 'Status',
    loading: 'Loading...',
    submit: 'Submit',
    cancel: 'Cancel',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    all: 'All',
    new: 'New',
    popular: 'Popular',
    recommended: 'Recommended',
  },
  
  lg: {
    // Navbar
    home: 'Awaka',
    about: 'Ebikwata ku ffe',
    services: 'Obuweereza',
    properties: 'Ebintu',
    projects: 'Pulojekiti',
    blog: 'Amawulire',
    contact: 'Tukubire',
    
    // Hero
    heroTitle: 'AMODZ PROPERTIES LIMITED',
    heroTagline: 'Tukola ekirooto kyo okubeera amaka.',
    getStarted: 'Tandika',
    viewProperties: 'Laba Ebintu',
    
    // Featured Properties
    featuredProperties: 'Ebintu Ebisingako Obulungi',
    featuredPropertiesDesc: 'Zuula ebintu byaffe ebyalondeddwa mu bifo ebikulu mu Uganda. Okuva ku mayumba ag\'omulembe okutuuka ku ttaka ly\'ebyobusuubuzi, zuula ensimbi zo.',
    contactUs: 'Tukubire',
    viewAllProperties: 'Laba Ebintu Byonna',
    
    // Plots & Land
    plotsLand: 'Ettaka n\'Ebifo',
    plotsLandDesc: 'Teeka ebiseera byo eby\'omu maaso mu ttaka ery\'omuwendo mu bifo ebikulu. Okuva ku ttaka ly\'okubeera okutuuka ku ly\'ebyobusuubuzi n\'eky\'ebyobulimi, tulina ettaka erikulungirira.',
    contactAgent: 'Yogera ne Mukozi',
    viewAllPlots: 'Laba Ettaka Lyonna',
    features: 'Ebirimu',
    available: 'Eriwo',
    hotDeal: 'Omugaso Omukulu',
    
    // Services
    ourServices: 'Obuweereza Bwaffe',
    servicesDesc: 'Obuweereza bw\'ebintu obw\'ekitongole obukwata ku byetaago byo',
    
    // Testimonials
    whatClientsSay: 'Bakasitoma Baffe Kye Bagamba',
    testimonialsDesc: 'Emboozi z\'amazima okuva ku bakasitoma abamatidde abazudde ebintu byabwe eby\'ekirooto',
    leaveReview: 'Leka Okubuulira',
    yourName: 'Erinnya lyo',
    rating: 'Obubonero',
    shareExperience: 'Gabana obumanyirivu bwo...',
    postReview: 'Sindika Okubuulira',
    posting: 'Tusindika...',
    reviewSuccess: 'Webale! Okubuulira kwo kujja kufulumizibwa oluvannyuma lw\'okukakasa.',
    
    // Gallery
    videoGallery: 'Ebifaananyi by\'Amaloboozi',
    comingSoon: 'Bijja Mangu',
    
    // Projects
    ourProjects: 'Pulojekiti Zaffe',
    projectsDesc: 'Laba pulojekiti zaffe ezimaze n\'ezigenda mu maaso',
    
    // CEO
    meetOurCEO: 'Sisinkane ne Mukulu Waffe',
    ceoDesc: 'Obukulembeze obw\'ekiruubirirwa obuvuga enkyukakyuka mu bintu by\'Uganda',
    
    // Team
    ourTeam: 'Ttiimu Yaffe',
    teamDesc: 'Sisinkane n\'abakugu abali emabega w\'obuwanguzi bwaffe',
    
    // Statistics
    yearsExperience: 'Emyaka gy\'Obumanyirivu',
    happyClients: 'Bakasitoma Abasanyufu',
    propertiesSold: 'Ebintu Ebyatundibwa',
    projectsCompleted: 'Pulojekiti Ezamalibwa',
    
    // Blog
    latestNews: 'Amawulire n\'Amagezi Agaggya',
    blogDesc: 'Beera ng\'omanyi ebikwata ku bintu n\'entambula y\'akatale',
    readMore: 'Soma Ebisingawo',
    
    // FAQ
    frequentlyAsked: 'Ebibuuzo Ebisinga Okubuuzibwa',
    faqDesc: 'Zuula ebiragiro ku bibuuzo ebisinga ku buweereza bwaffe',
    
    // Careers
    joinOurTeam: 'Weegatte ku Ttiimu Yaffe',
    careersDesc: 'Zimba omulimu gwo ne kkampuni enkulu ey\'ebintu mu Uganda',
    applyNow: 'Saba Kati',
    
    // Contact
    getInTouch: 'Tukubire',
    contactDesc: 'Weetegese okuzuula ekintu kyo eky\'ekirooto? Tukubire leero',
    sendMessage: 'Sindika Obubaka',
    
    // Footer
    quickLinks: 'Ebikwata Amangu',
    followUs: 'Tugoberere',
    contactInfo: 'Ebikwata ku Kutukubira',
    allRightsReserved: 'Eddembe lyonna literekeddwa.',
    
    // Common
    learnMore: 'Manya Ebisingawo',
    viewDetails: 'Laba Ebikwata',
    location: 'Ekifo',
    price: 'Omuwendo',
    size: 'Obunene',
    status: 'Embeera',
    loading: 'Tukozesa...',
    submit: 'Sindika',
    cancel: 'Sazaamu',
    close: 'Ggalawo',
    next: 'Eddako',
    previous: 'Ekyasooka',
    search: 'Noonya',
    filter: 'Sengejja',
    sort: 'Tegeka',
    all: 'Byonna',
    new: 'Bipya',
    popular: 'Ebimanyiddwa',
    recommended: 'Ebyakuteesebwa',
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'lg')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
