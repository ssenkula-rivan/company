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
    
    // Footer
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    propertySales: 'Property Sales',
    propertyRentals: 'Property Rentals',
    landPlots: 'Land & Plots',
    investmentAdvisory: 'Investment Advisory',
    
    // Contact
    officeLocation: 'Office Location:',
    phone: 'Phone:',
    email: 'Email:',
    businessHours: 'Business Hours:',
    mondayFriday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: Closed',
    sunday: 'Sunday: Closed',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    phoneNumber: 'Phone Number',
    selectService: 'Select Service',
    yourMessage: 'Your Message',
    thankYouMessage: 'Thank you for your message! We will get back to you within 24 hours.',
    
    // Blog
    latestNewsArticles: 'Latest News & Articles',
    realEstateTips: 'Real Estate Tips',
    investmentGuide: 'Investment Guide',
    propertyManagement: 'Property Management',
    
    // Projects
    completed: 'Completed',
    inProgress: 'In Progress',
    progress: 'Progress',
    
    // Services
    propertyDevelopment: 'Property Development',
    realEstateValuation: 'Real Estate Valuation',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    
    // Careers
    careers: 'Careers',
    joinOurTeam: 'Join Our Team',
    currentOpportunities: 'Current Opportunities:',
    realEstateAgent: 'Real Estate Agent',
    propertyManager: 'Property Manager',
    leasingConsultant: 'Leasing Consultant',
    marketingSpecialist: 'Marketing Specialist',
    administrativeAssistant: 'Administrative Assistant',
    sendCVTo: 'Send your CV to',
    jobApplicationForm: 'Job Application Form',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    positionAppliedFor: 'Position Applied For',
    selectPosition: 'Select a position',
    coverLetterMessage: 'Cover Letter / Message',
    uploadCV: 'Upload CV/Resume',
    clickToUpload: 'Click to upload or drag and drop',
    pdfDocDocx: 'PDF, DOC, DOCX (Max 5MB)',
    applicationSubmitted: 'Application submitted successfully!',
    submitting: 'Submitting...',
    submitApplication: 'Submit Application',
    
    // Tenders
    tendersOpportunities: 'Tenders & Opportunities',
    currentTenders: 'Current Tenders',
    tenderInquiries: 'For tender inquiries:',
    
    // Secondary Nav
    getQuotation: 'Get a Quotation',
    findYourLocation: 'Find your location...',
    propertiesAvailable: 'Properties available',
    request: 'Request',
    ourLocations: 'Our Locations',
    premiumPlotsAvailable: 'Premium plots available',
    modernHousing: 'Modern housing',
    strategicLocation: 'Strategic location',
    viewAllProperties: 'View All Properties',
    browseCompleteCatalog: 'Browse complete catalog',
    tellUsWhatYoureFor: 'Tell us what you\'re looking for!',
    whatAreYouLookingFor: 'What are you looking for?',
    buyLand: 'Buy Land',
    rentProperty: 'Rent Property',
    buyHouse: 'Buy House',
    apartment: 'Apartment',
    commercialSpace: 'Commercial Space',
    plotForDevelopment: 'Plot for Development',
    investmentProperty: 'Investment Property',
    other: 'Other',
    yourPhoneNumber: 'Your Phone Number',
    wellSendRequest: 'We\'ll send your request via WhatsApp',
    sendRequestViaWhatsApp: 'Send Request via WhatsApp',
    requestSent: 'Request Sent!',
    inquiryForwarded: 'Your inquiry has been forwarded. We\'ll contact you soon!',
    tellUsAboutProject: 'Tell us about your project',
    serviceType: 'Service Type',
    selectService: 'Select a service',
    constructionServices: 'Construction Services',
    realEstateConsultation: 'Real Estate Consultation',
    preferredLocation: 'Preferred Location',
    budgetRange: 'Budget Range',
    selectBudgetRange: 'Select budget range',
    under50m: 'Under 50M UGX',
    '50m100m': '50M - 100M UGX',
    '100m200m': '100M - 200M UGX',
    '200m500m': '200M - 500M UGX',
    above500m: 'Above 500M UGX',
    flexible: 'Flexible',
    additionalDetails: 'Additional Details',
    tellUsMoreRequirements: 'Tell us more about your requirements...',
    submitRequest: 'Submit Request',
    
    // How to Start
    howToStart: 'How to Start',
    followSimpleProcess: 'Follow our simple process to turn your dream of owning a property into reality',
    chooseYourProperty: 'Choose Your Property',
    browseExtensiveCollection: 'Browse our extensive collection of plots, houses, and commercial properties. Find the perfect match for your needs.',
    contactOurTeam: 'Contact Our Team',
    reachOutToAgents: 'Reach out to our agents to schedule a site visit and discuss your requirements in detail.',
    payInitialDeposit: 'Pay Initial Deposit',
    securePropertyDeposit: 'Secure your property with an initial deposit. We offer flexible payment terms to suit your budget.',
    paymentPlan: 'Payment Plan',
    chooseFlexiblePlans: 'Choose from our flexible installment plans. Pay in convenient monthly or quarterly installments.',
    constructionBegins: 'Construction Begins',
    expertTeamBegins: 'Our expert team begins construction. Regular updates and site visits keep you informed throughout.',
    propertyHandover: 'Property Handover',
    receiveCompletedProperty: 'Receive your completed property with all documentation. Welcome to your new home or investment.',
    
    // Mission Vision
    ourMissionVisionGoals: 'Our Mission, Vision & Goals',
    ourMission: 'Our Mission',
    missionText: 'To make your dream of a living home a reality.',
    ourVision: 'Our Vision',
    visionText: 'To be the most trusted and innovative real estate company, empowering individuals and families to achieve their dream of owning a living home.',
    ourGoal: 'Our Goal',
    goalText: 'To help individuals and families acquire affordable, secure, and well-planned property that enables them to turn their dream of owning a home into reality at an early age.',
    focusAreas: 'Focus Areas',
    realEstateDevelopment: 'Real Estate Development',
    strategicPropertyDevelopment: 'Strategic property development projects',
    propertyInvestmentOpportunities: 'Property Investment Opportunities',
    lucrativeInvestmentOptions: 'Lucrative investment options for growth',
    professionalManagement: 'Professional management of properties',
    residentialCommercialConstruction: 'Residential & Commercial Construction',
    buildingQualitySpaces: 'Building quality residential and commercial spaces',
    ourStory: 'Our Story',
    foundedOn: 'Founded on',
    establishedTrusted: 'has established itself as Uganda\'s trusted real estate partner.',
    coreServices: 'Core Services',
    landSalesAcquisition: 'Land Sales & Acquisition',
    residentialConstruction: 'Residential Construction',
    finishedHomes: 'Finished Homes',
    commitmentExcellence: 'Our commitment to',
    excellenceIntegrity: 'excellence and integrity',
    ensuresEveryClient: 'ensures every client receives professional service, making property ownership accessible and dreams achievable.',
    ourDevelopmentSites: 'Our Development Sites',
    activeDevelopmentSites: 'We have active development sites in strategic locations across Uganda',
    kapeeka: 'Kapeeka',
    seeta: 'Seeta',
    mukono: 'Mukono',
    allSitesFeature: 'All our sites feature titled land, accessible roads, and proximity to essential amenities',
    contactUsForSiteVisits: 'Contact Us for Site Visits',
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
    
    // Footer
    privacyPolicy: 'Enkola y\'Ebyama',
    termsConditions: 'Amateeka n\'Obukwakkulizo',
    propertySales: 'Okutunda Ebintu',
    propertyRentals: 'Okupangisa Ebintu',
    landPlots: 'Ettaka n\'Ebifo',
    investmentAdvisory: 'Okubuulira ku Nsimbi',
    
    // Contact
    officeLocation: 'Ekifo ky\'Ofiisi:',
    phone: 'Essimu:',
    email: 'Obubaka bw\'Oku Mukutu:',
    businessHours: 'Essaawa z\'Omulimu:',
    mondayFriday: 'Balaza - Lwakutaano: 8:00 AM - 6:00 PM',
    saturday: 'Lwamukaaga: Kigaddwaamu',
    sunday: 'Sabbiiti: Kigaddwaamu',
    yourName: 'Erinnya Lyo',
    yourEmail: 'Obubaka Bwo',
    phoneNumber: 'Ennamba y\'Essimu',
    selectService: 'Londa Obuweereza',
    yourMessage: 'Obubaka Bwo',
    thankYouMessage: 'Webale ku bubaka bwo! Tujja kukuddamu mu ssaawa 24.',
    
    // Blog
    latestNewsArticles: 'Amawulire n\'Ebiwandiiko Ebipya',
    realEstateTips: 'Amagezi ku Bintu',
    investmentGuide: 'Okuluŋŋamya Ensimbi',
    propertyManagement: 'Okuddukanya Ebintu',
    
    // Projects
    completed: 'Bimaze',
    inProgress: 'Bigenda Mu Maaso',
    progress: 'Enkulaakulana',
    
    // Services
    propertyDevelopment: 'Okukulaakulanya Ebintu',
    realEstateValuation: 'Okupima Omuwendo gw\'Ebintu',
    
    // FAQ
    faqTitle: 'Ebibuuzo Ebisinga Okubuuzibwa',
    
    // Careers
    careers: 'Emirimu',
    joinOurTeam: 'Weegatte ku Ttiimu Yaffe',
    currentOpportunities: 'Emikisa Egiriwo Kati:',
    realEstateAgent: 'Omukozi w\'Ebintu',
    propertyManager: 'Omuddukanya Ebintu',
    leasingConsultant: 'Omuwi w\'Amagezi ku Kupangisa',
    marketingSpecialist: 'Omukugu mu Kutunda',
    administrativeAssistant: 'Omuyambi mu Byobufuzi',
    sendCVTo: 'Sindika CV yo eri',
    jobApplicationForm: 'Foomu y\'Okusaba Omulimu',
    fullName: 'Erinnya Lyonna',
    emailAddress: 'Endagiriro y\'Obubaka',
    positionAppliedFor: 'Omulimu Gw\'osaba',
    selectPosition: 'Londa omulimu',
    coverLetterMessage: 'Ebbaluwa y\'Okwanjula / Obubaka',
    uploadCV: 'Teeka CV/Resume',
    clickToUpload: 'Nyiga okuteeka oba sika oteke',
    pdfDocDocx: 'PDF, DOC, DOCX (Ekisinga 5MB)',
    applicationSubmitted: 'Okusaba kwasindikiddwa obulungi!',
    submitting: 'Tusindika...',
    submitApplication: 'Sindika Okusaba',
    
    // Tenders
    tendersOpportunities: 'Tenda n\'Emikisa',
    currentTenders: 'Tenda Eziriwo Kati',
    tenderInquiries: 'Ku bibuuzo bya tenda:',
    
    // Secondary Nav
    getQuotation: 'Funa Omuwendo',
    findYourLocation: 'Zuula ekifo kyo...',
    propertiesAvailable: 'Ebintu biriwo',
    request: 'Saba',
    ourLocations: 'Ebifo Byaffe',
    premiumPlotsAvailable: 'Ettaka ery\'omuwendo eriwo',
    modernHousing: 'Amayumba ag\'omulembe',
    strategicLocation: 'Ekifo eky\'obukugu',
    viewAllProperties: 'Laba Ebintu Byonna',
    browseCompleteCatalog: 'Lambula lukalala lwonna',
    tellUsWhatYoureFor: 'Tubuulire ky\'onoonya!',
    whatAreYouLookingFor: 'Ki ky\'onoonya?',
    buyLand: 'Gula Ettaka',
    rentProperty: 'Pangisa Ekintu',
    buyHouse: 'Gula Ennyumba',
    apartment: 'Apartment',
    commercialSpace: 'Ekifo ky\'Ebyobusuubuzi',
    plotForDevelopment: 'Ettaka ly\'Okukulaakulanya',
    investmentProperty: 'Ekintu ky\'Ensimbi',
    other: 'Ekirala',
    yourPhoneNumber: 'Ennamba yo y\'Essimu',
    wellSendRequest: 'Tujja kusindika okusaba kwo ku WhatsApp',
    sendRequestViaWhatsApp: 'Sindika Okusaba ku WhatsApp',
    requestSent: 'Okusaba Kwasindikiddwa!',
    inquiryForwarded: 'Okubuuza kwo kwasindikiddwa. Tujja kukutuukirira mangu!',
    tellUsAboutProject: 'Tubuulire ku pulojekiti yo',
    serviceType: 'Ekika ky\'Obuweereza',
    selectService: 'Londa obuweereza',
    constructionServices: 'Obuweereza bw\'Okuzimba',
    realEstateConsultation: 'Okubuulirwa ku Bintu',
    preferredLocation: 'Ekifo Ky\'oyagala',
    budgetRange: 'Omuwendo Gw\'oyinza',
    selectBudgetRange: 'Londa omuwendo gw\'oyinza',
    under50m: 'Wansi wa 50M UGX',
    '50m100m': '50M - 100M UGX',
    '100m200m': '100M - 200M UGX',
    '200m500m': '200M - 500M UGX',
    above500m: 'Waggulu wa 500M UGX',
    flexible: 'Ekyennyini',
    additionalDetails: 'Ebikwata Ebisingawo',
    tellUsMoreRequirements: 'Tubuulire ebisingawo ku byetaago byo...',
    submitRequest: 'Sindika Okusaba',
    
    // How to Start
    howToStart: 'Engeri y\'Okutandika',
    followSimpleProcess: 'Goberera enkola yaffe ennyangu okufuula ekirooto kyo okubeera amaka',
    chooseYourProperty: 'Londa Ekintu Kyo',
    browseExtensiveCollection: 'Lambula ebintu byaffe ebingi eby\'ettaka, amayumba, n\'ebintu by\'ebyobusuubuzi. Zuula ekikutuukirira.',
    contactOurTeam: 'Tukubire Ttiimu Yaffe',
    reachOutToAgents: 'Tukubire abakozi baffe okuteekawo olugendo lw\'okulaba ekifo n\'okukubaganya ebirowoozo ku byetaago byo.',
    payInitialDeposit: 'Sasula Deposit ya Sooka',
    securePropertyDeposit: 'Teeka ekintu kyo mu bukuumi n\'ensimbi za sooka. Tulina enkola z\'okusasula ezinywevu.',
    paymentPlan: 'Enteekateeka y\'Okusasula',
    chooseFlexiblePlans: 'Londa ku nteekateeka zaffe ezinywevu. Sasula mu mwezi oba mu myezi esatu.',
    constructionBegins: 'Okuzimba Kutandika',
    expertTeamBegins: 'Ttiimu yaffe ey\'obukugu etandika okuzimba. Amawulire ag\'enjawulo n\'okulaba ekifo bikukuuma ng\'omanyi byonna.',
    propertyHandover: 'Okuweebwa Ekintu',
    receiveCompletedProperty: 'Weebwa ekintu kyo ekimaze n\'ebiwandiiko byonna. Tukwanirizaamu ku maka go amapya oba ensimbi yo.',
    
    // Mission Vision
    ourMissionVisionGoals: 'Ekigendererwa, Okulaba Kwaffe n\'Ebiruubirirwa',
    ourMission: 'Ekigendererwa Kyaffe',
    missionText: 'Tukola ekirooto kyo okubeera amaka.',
    ourVision: 'Okulaba Kwaffe',
    visionText: 'Okubeera kkampuni y\'ebintu esinga okwesigibwa era ey\'obuyiiya, okusobozesa abantu n\'amaka okutuukiriza ekirooto kyabwe eky\'okuba n\'amaka.',
    ourGoal: 'Ekigendererwa Kyaffe',
    goalText: 'Okuyamba abantu n\'amaka okufuna ebintu ebibuseeko, ebitali mu bulabe, era ebitegekeddwa obulungi ebibayamba okukyusa ekirooto kyabwe eky\'okuba n\'amaka mu myaka emito.',
    focusAreas: 'Ebifo Bye Tussaayo Essira',
    realEstateDevelopment: 'Okukulaakulanya Ebintu',
    strategicPropertyDevelopment: 'Pulojekiti z\'okukulaakulanya ebintu ez\'obukugu',
    propertyInvestmentOpportunities: 'Emikisa gy\'Okusiga Ensimbi mu Bintu',
    lucrativeInvestmentOptions: 'Emikisa gy\'ensimbi egireeta amagoba',
    professionalManagement: 'Okuddukanya ebintu mu ngeri ey\'obukugu',
    residentialCommercialConstruction: 'Okuzimba Amayumba n\'Ebifo by\'Ebyobusuubuzi',
    buildingQualitySpaces: 'Okuzimba amayumba n\'ebifo by\'ebyobusuubuzi eby\'omutindo',
    ourStory: 'Emboozi Yaffe',
    foundedOn: 'Yatandikibwa ku',
    establishedTrusted: 'yeetadde ng\'omukwano gw\'ebintu ogwesigibwa mu Uganda.',
    coreServices: 'Obuweereza Obukulu',
    landSalesAcquisition: 'Okutunda n\'Okufuna Ettaka',
    residentialConstruction: 'Okuzimba Amayumba',
    finishedHomes: 'Amayumba Agamaze',
    commitmentExcellence: 'Okwewuubuza kwaffe ku',
    excellenceIntegrity: 'butuukirivu n\'obwesigwa',
    ensuresEveryClient: 'kukakasa nti buli kasitoma afuna obuweereza obw\'obukugu, okufuula okuba n\'ebintu okwanguwa era n\'ebiruubirirwa okutuukirira.',
    ourDevelopmentSites: 'Ebifo Byaffe eby\'Okukulaakulanya',
    activeDevelopmentSites: 'Tulina ebifo eby\'okukulaakulanya ebikola mu bifo ebikulu mu Uganda',
    kapeeka: 'Kapeeka',
    seeta: 'Seeta',
    mukono: 'Mukono',
    allSitesFeature: 'Ebifo byaffe byonna birina ettaka eririna ttayitolo, enguudo ezituukibwako, era biriraanye n\'ebikozesebwa',
    contactUsForSiteVisits: 'Tukubire ku Kulaba Ebifo',
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
