/* ═══════════════════════════════════════════
   APPLEBOX — MAIN SCRIPT  v3.0
   Includes RTL / Arabic i18n system
═══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   TRANSLATION DICTIONARY
───────────────────────────────────────── */
var TRANSLATIONS = {

  en: {
    /* NAV */
    navHome:      'Home',
    navAbout:     'About',
    navServices:  'Services',
    navFleet:     'Fleet',
    navProjects:  'Projects',
    navCta:       'Start a Project',
    navDropFull:  'Full Production Service',
    navDropUnit:  'Unit Production Service',
    navDropRent:  'Rentals',
    navDropCater: 'Catering',

    /* HERO */
    heroEyebrow:  'Film · TVC · Production Services · Saudi Arabia',
    heroLine1:    'YOU BRING',
    heroLine2:    'THE VISION.',
    heroAccent:   'WE RUN THE SET.',
    heroDesc:     'Built for production houses, agencies, and international crews. AppleBox delivers the fleet, crew, and execution — from planning to final wrap.',
    heroScroll:   'Scroll',

    /* STATS */
    stat1Label:   'Years in Production',
    stat2Label:   'Fleet Vehicles',
    stat3Label:   'Productions Supported',
    stat4Label:   'Integrated Ecosystem',

    /* HOME — SERVICES PREVIEW */
    servicesEyebrow:   'What We Do',
    servicesHeading:   'FOUR WAYS TO',
    servicesHeadingAc: 'WORK WITH US',
    servicesIntroText: 'AppleBox delivers complete production support — from planning and execution to fleet, rentals, and catering. Built to support everything from independent shoots to large-scale international productions across Saudi Arabia.',

    svc1Title: 'Full Production Service',
    svc1Desc:  'Complete end-to-end production management covering pre-production, crew coordination, logistics, fleet deployment, and full on-set execution — handled by one integrated team from start to final wrap.',
    svc2Title: 'Unit Production Service',
    svc2Desc:  'Dedicated on-ground production support for projects shooting in Saudi Arabia, including local crew, permits, logistics, and fleet — ensuring smooth execution for international and regional teams.',
    svc3Title: 'Rentals',
    svc3Desc:  'A full range of production-ready vehicles and equipment including production vans, generators, DIT stations, and crew support units — available as standalone rentals or integrated into your production setup.',
    svc4Title: 'Catering',
    svc4Desc:  'Professional on-set catering solutions including hot meals, craft services, and barista coffee stations — designed to keep cast and crew energized, comfortable, and performing throughout the day.',

    /* HOME — WHY US */
    whyEyebrow:  'Why AppleBox',
    whyHeading:  'WHAT SETS US',
    whyHeadingAc:'APART',
    why1Title: 'One Call, Everything Handled',
    why1Desc:  'From prep to wrap, AppleBox manages the entire production workflow — fleet, crew, and logistics under one contract and one point of contact.',
    why2Title: 'Purpose-Built Fleet',
    why2Desc:  'Our vehicles are designed for production — equipped with generators, DIT stations, coffee setups, and essential on-set infrastructure.',
    why3Title: 'International Standards',
    why3Desc:  'We support international productions with workflows, expectations, and execution aligned to global production standards.',
    why4Title: 'Local Expertise',
    why4Desc:  'Years of on-ground experience in Saudi Arabia — from permits and locations to logistics and production challenges, fully handled.',
    why5Title: 'Crew-Focused Approach',
    why5Desc:  'We build systems that support every department — keeping crews efficient, comfortable, and focused throughout the shoot.',
    why6Title: "Built for What's Next",
    why6Desc:  "Positioned within Saudi Arabia's growing film industry, AppleBox is built to scale with the future of production in the region.",

    /* HOME — PROCESS */
    processEyebrow:  'How It Works',
    processHeading:  'FROM BRIEF',
    processHeadingAc:'TO SCREEN',
    proc1Title: 'Brief & Scope',      proc1Desc: 'Tell us your project — dates, locations, crew size.',
    proc2Title: 'Custom Proposal',    proc2Desc: 'We build a tailored package with fleet and crew requirements.',
    proc3Title: 'Production Planning',proc3Desc: 'Permits, logistics, crew scheduling, equipment lock.',
    proc4Title: 'On-Set Execution',   proc4Desc: 'Fleet deployed. Crew on standby. Full support call to wrap.',
    proc5Title: 'Wrap & Debrief',     proc5Desc: 'Clean breakdown, DIT handoff, readiness for next shoot.',

    /* HOME — AUDIENCE */
    audienceEyebrow:  'Who We Work With',
    audienceHeading:  'PRODUCTION',
    audienceHeadingAc:'TEAMS WE SUPPORT',
    aud1Title: 'Production Houses (Local & International)',
    aud1Desc:  'We operate as your execution arm on the ground — deploying fleet, crew, and infrastructure on demand.',
    aud2Title: 'Agencies',
    aud2Desc:  'Seamless support for TVCs, campaigns, and branded content from brief to final wrap.',
    aud3Title: 'Freelancers',
    aud3Desc:  'Flexible production support tailored for independent professionals and small teams.',

    /* HOME — TRUSTED BY */
    trustedEyebrow:  'Trusted By',
    trustedHeading:  "BRANDS & PRODUCTIONS",
    trustedHeadingAc:"WE'VE WORKED WITH",

    /* HOME — FINAL CTA */
    ctaHeading:  'PLAN YOUR',
    ctaHeadingAc:'PRODUCTION',
    ctaSub:      "Tell us what you're shooting — we'll handle the execution from start to wrap.",
    ctaBtn:      'Start a Project',
    ctaBtnGhost: 'Download Company Profile',

    /* EMAIL MODAL */
    modalTitle:     'Download Company Profile',
    modalSub:       'Enter your email to continue',
    modalBtn:       'Download',
    modalCancel:    'Cancel',

    /* SERVICES PAGE */
    servicesPageEyebrow:  'Our Services',
    servicesPageH1a: 'WHAT WE',
    servicesPageH1b: 'OFFER.',
    servicesPageDesc: 'Four ways to work with AppleBox — from complete production management to standalone equipment rentals. Every service is available independently or combined into a full production setup.',
    svc1Label: 'Service 01', svc1Short: 'FULL\nPROD',
    svc2Label: 'Service 02', svc2Short: 'UNIT\nPROD',
    svc3Label: 'Service 03', svc3Short: 'RENT\nALS',
    svc4Label: 'Service 04', svc4Short: 'CATER\nING',
    svcBtn: 'Start a Project →',

    svc1FullTitle: 'Full Production Service',
    svc1FullDesc: 'End-to-end production management — planning, crew, fleet, and execution handled under one system. AppleBox serves as your single operational partner from the first brief to final wrap, covering pre-production planning, permit handling, location logistics, fleet deployment, on-set crew coordination, and post-shoot breakdown. Designed for production houses and international crews who need a turnkey solution in Saudi Arabia.',
    svc2FullTitle: 'Unit Production Service',
    svc2FullDesc: 'Local execution support for international and regional productions operating in Saudi Arabia. AppleBox embeds directly into your existing production structure — providing local crew, permits, fleet, and logistics without disrupting your workflow. Built for international productions that have their own creative and technical leadership but need a reliable, experienced local unit on the ground.',
    svc3FullTitle: 'Rentals',
    svc3FullDesc: 'Production vehicles, equipment, and technical units available on demand — independently or bundled into a complete production setup. Our rental fleet includes production vans, unit trucks, DIT stations, generators, wardrobe trucks, crew transport, and catering units. Every rental is production-ready, fully maintained, and operated by experienced on-set drivers and crew.',
    svc4FullTitle: 'Catering',
    svc4FullDesc: 'On-set catering, craft services, and coffee stations to keep cast and crew productive all day. AppleBox catering is built specifically for production environments — hot meals, dietary-aware menus, craft service spreads, and professional barista stations. Available as a standalone service or integrated into your full production package, with dedicated catering crew managing setup, service, and breakdown.',

    /* FLEET PAGE */
    fleetEyebrow:  'The Fleet',
    fleetH1a: 'BUILT FOR',
    fleetH1b: 'PRODUCTION.',
    fleetH1c: 'READY TO DEPLOY.',
    fleetIntro1: 'AppleBox operates a purpose-built fleet of 9 production vehicles — covering unit support, wardrobe, hygiene, talent facilities, and crew transport. Every vehicle is production-ready, fully insured, and staffed by experienced on-set crew.',
    fleetIntro2: 'Unit Van · Unit Truck · Support Van · Wardrobe Trucks · Toilet Unit · Honeywagon · VIP Caravan · Crew Transport',
    fleetCtaH:   'DEPLOY THE FLEET',
    fleetCtaHac: 'ON YOUR NEXT SHOOT',
    fleetCtaSub: "Tell us your production dates and locations. We'll build the right fleet package.",
    fleetCtaBtn: 'Request a Quote',
    fleetBestFor: 'Best For',

    /* ABOUT PAGE */
    aboutEyebrow: 'About AppleBox',
    aboutH1a: 'THE',
    aboutH1b: 'PRODUCTION',
    aboutH1c: 'ECOSYSTEM',
    aboutLead: 'AppleBox was built on a simple observation: great productions fail not because of a lack of creative talent, but because of a lack of operational infrastructure. We fixed that.',
    aboutSub: 'Founded in Saudi Arabia and operating across the Kingdom and beyond, AppleBox has spent 7+ years building the production infrastructure that directors, agencies, and international crews rely on. We provide media production consultancy and expertise for pre-production and production, offering route-to-market solutions with rapid execution — covering permits, customer service, and unit service.',
    aboutStoryLabel: 'Our Story',
    aboutQuote: '"We didn\'t set out to be a production company. We set out to be the reason productions don\'t fail."',
    aboutP1: 'It started with a single production van and a belief that Saudi Arabia deserved world-class production infrastructure. From those early shoots, AppleBox grew — adding vehicles, crew, capabilities, and clients year after year.',
    aboutP2: 'Today, we operate one of the largest dedicated production fleets in Saudi Arabia, support international productions from across the globe, and serve as the backbone infrastructure for the Kingdom\'s most ambitious creative work. We empower growing productions to achieve their potential by offering the guidance, resources, and on-ground connections needed for successful execution.',
    aboutP3: 'As Saudi Arabia\'s creative economy accelerates under Vision 2030, AppleBox is not catching up — we were already here.',
    pillar1Title: 'Precision',
    pillar1Desc: 'Every van stocked the same way. Every departure time met. Every piece of equipment checked before it leaves the yard. Precision is not a value — it is an operational standard.',
    pillar2Title: 'Accountability',
    pillar2Desc: 'You have one point of contact. They answer on the first ring. Problems are solved before you know they existed. That is the AppleBox standard.',
    pillar3Title: 'Scale',
    pillar3Desc: 'From a single crew van for a one-day shoot to a full fleet deployment for a 60-day feature — we scale without compromising quality of execution.',

    /* PROJECTS PAGE */
    projectsEyebrow: 'Selected Work',
    projectsH1: 'PROJECTS',
    projectsDesc: 'From international feature films to local TVCs — a selection of productions AppleBox has powered across Saudi Arabia.',
    projectsCta: 'Ready to add your production to this list?',
    projectsCtaBtn: 'Start Your Project',

    /* CONTACT PAGE */
    contactEyebrow: 'Get in Touch',
    contactH1a: "LET'S",
    contactH1b: 'BUILD',
    contactH1c: 'SOMETHING.',
    contactDesc: "Tell us about your production. A brief overview is enough. We'll respond within 24 hours with an initial proposal.",
    contactRentalNote: "Need only rentals or transport? Just mention it — we'll respond fast.",
    contactLocLabel: 'Location',
    contactLocVal1: 'Riyadh, Saudi Arabia',
    contactLocVal2: 'Jeddah, Saudi Arabia',
    contactOpsLabel: 'Operations',
    contactOpsVal: 'Kingdom-wide deployment',
    contactPhoneLabel: 'Phone',
    contactWaLabel: 'WhatsApp',
    contactFormHeading: 'Start a Project',
    contactSuccess: "Request sent successfully. We'll be in touch within 24 hours.",
    contactError:   'Something went wrong. Please try again or reach us via WhatsApp.',
    formLabelName:    'Your Name',
    formLabelCompany: 'Company',
    formLabelEmail:   'Email',
    formLabelSupport: 'Support Type',
    formLabelType:    'Project Type',
    formLabelDates:   'Shoot Dates',
    formLabelCrew:    'Crew Size',
    formLabelBrief:   'Project Brief',
    formPlaceholderName:    'Full name',
    formPlaceholderCompany: 'Production company or agency',
    formPlaceholderEmail:   'you@company.com',
    formPlaceholderSupport: 'What do you need?',
    formPlaceholderType:    'Select project type',
    formPlaceholderDates:   'Approx. dates or period',
    formPlaceholderCrew:    'Estimated crew count',
    formPlaceholderBrief:   'Tell us about your production, location, key requirements, and anything else that helps us understand the scope.',
    formSubmit: 'Send Request →',
    formSubmitRental: 'Request Rental Quote →',
    formOptFPS:  'Full Production Support',
    formOptUnit: 'Unit Production',
    formOptRent: 'Fleet / Equipment Rental',
    formOptTrans:'Transport Only',
    formOptFF:   'Feature Film',
    formOptTVC:  'TVC / Commercial',
    formOptDrama:'Drama Series',
    formOptMV:   'Music Video',
    formOptBrand:'Branded Content',
    formOptIntl: 'International Production',
    formOptOther:'Other',

    /* FOOTER */
    footerCopy: '© 2026 AppleBox Production Services · Saudi Arabia',
    footerAbout:'About', footerServices:'Services', footerFleet:'Fleet',
    footerProjects:'Projects', footerContact:'Contact',
  },

  ar: {
    /* NAV */
    navHome:      'الرئيسية',
    navAbout:     'من نحن',
    navServices:  'خدماتنا',
    navFleet:     'الأسطول',
    navProjects:  'المشاريع',
    navCta:       'ابدأ مشروعك',
    navDropFull:  'خدمة الإنتاج الكامل',
    navDropUnit:  'خدمة الوحدة الإنتاجية',
    navDropRent:  'الإيجارات',
    navDropCater: 'خدمة التموين',

    /* HERO */
    heroEyebrow:  'سينما · إعلانات · خدمات الإنتاج · المملكة العربية السعودية',
    heroLine1:    'أنت تجلب',
    heroLine2:    'الرؤية.',
    heroAccent:   'نحن ندير الإنتاج.',
    heroDesc:     'مبني لبيوت الإنتاج والوكالات والأطقم الدولية. آبل بوكس توفر الأسطول والطاقم والتنفيذ — من التخطيط حتى انتهاء التصوير.',
    heroScroll:   'اسحب',

    /* STATS */
    stat1Label:   'سنوات في الإنتاج',
    stat2Label:   'مركبة في الأسطول',
    stat3Label:   'إنتاج مدعوم',
    stat4Label:   'منظومة متكاملة',

    /* HOME — SERVICES PREVIEW */
    servicesEyebrow:   'ما نقدمه',
    servicesHeading:   'أربع طرق',
    servicesHeadingAc: 'للعمل معنا',
    servicesIntroText: 'تقدم آبل بوكس دعمًا إنتاجيًا متكاملًا — من التخطيط والتنفيذ إلى الأسطول والإيجارات والتموين. مبنية لدعم كل شيء من التصوير المستقل إلى الإنتاجات الدولية الكبرى في المملكة العربية السعودية.',

    svc1Title: 'خدمة الإنتاج الكامل',
    svc1Desc:  'إدارة إنتاجية شاملة من الألف إلى الياء — التخطيط، وتنسيق الطاقم، واللوجستيات، ونشر الأسطول، والتنفيذ الكامل على موقع التصوير — بيد فريق واحد متكامل.',
    svc2Title: 'خدمة الوحدة الإنتاجية',
    svc2Desc:  'دعم إنتاجي ميداني للمشاريع المصوَّرة في المملكة العربية السعودية، يشمل الطاقم المحلي والتصاريح واللوجستيات والأسطول.',
    svc3Title: 'الإيجارات',
    svc3Desc:  'مجموعة كاملة من مركبات الإنتاج والمعدات — متوفرة بشكل مستقل أو مدمجة ضمن إعداد الإنتاج الخاص بك.',
    svc4Title: 'خدمة التموين',
    svc4Desc:  'حلول تموين احترافية على موقع التصوير تشمل الوجبات الساخنة وخدمات الضيافة ومحطات القهوة — لإبقاء الطاقم في أفضل حالاته طوال اليوم.',

    /* HOME — WHY US */
    whyEyebrow:  'لماذا آبل بوكس',
    whyHeading:  'ما يميزنا',
    whyHeadingAc:'عن غيرنا',
    why1Title: 'مكالمة واحدة تكفي',
    why1Desc:  'من التحضير حتى انتهاء التصوير، تدير آبل بوكس سير العمل الإنتاجي بالكامل — الأسطول والطاقم واللوجستيات تحت عقد واحد ونقطة تواصل واحدة.',
    why2Title: 'أسطول مُصمَّم للإنتاج',
    why2Desc:  'مركباتنا مصممة خصيصًا للإنتاج — مجهزة بمولدات ومحطات DIT ونقاط قهوة وبنية تحتية أساسية على موقع التصوير.',
    why3Title: 'معايير دولية',
    why3Desc:  'ندعم الإنتاجات الدولية بسير عمل وتوقعات وتنفيذ يتماشى مع المعايير الإنتاجية العالمية.',
    why4Title: 'خبرة محلية',
    why4Desc:  'سنوات من الخبرة الميدانية في المملكة العربية السعودية — من التصاريح والمواقع إلى التحديات اللوجستية والإنتاجية، كلها في عهدتنا.',
    why5Title: 'نهج يركز على الطاقم',
    why5Desc:  'نبني أنظمة تدعم كل قسم — للحفاظ على كفاءة الطواقم وراحتها وتركيزها طوال أيام التصوير.',
    why6Title: 'مبنيون للمستقبل',
    why6Desc:  'في خضم نمو صناعة الأفلام في المملكة العربية السعودية، آبل بوكس مهيأة لتوسيع نطاق عملها مع مستقبل الإنتاج في المنطقة.',

    /* HOME — PROCESS */
    processEyebrow:   'كيف نعمل',
    processHeading:   'من الفكرة',
    processHeadingAc: 'إلى الشاشة',
    proc1Title: 'الملخص والنطاق',      proc1Desc: 'أخبرنا بمشروعك — التواريخ والمواقع وحجم الطاقم.',
    proc2Title: 'العرض المخصص',        proc2Desc: 'نبني باقة مصممة خصيصًا لمتطلبات الأسطول والطاقم.',
    proc3Title: 'تخطيط الإنتاج',       proc3Desc: 'التصاريح واللوجستيات وجدولة الطاقم وتحديد المعدات.',
    proc4Title: 'التنفيذ الميداني',    proc4Desc: 'الأسطول جاهز. الطاقم في انتظارك. دعم كامل حتى انتهاء التصوير.',
    proc5Title: 'الإنهاء والمراجعة',   proc5Desc: 'تفكيك منظم وتسليم ملفات DIT والاستعداد للتصوير التالي.',

    /* HOME — AUDIENCE */
    audienceEyebrow:  'من نعمل معهم',
    audienceHeading:  'فرق الإنتاج',
    audienceHeadingAc:'التي ندعمها',
    aud1Title: 'بيوت الإنتاج (محلية ودولية)',
    aud1Desc:  'نعمل كذراع تنفيذي على أرض الواقع — ننشر الأسطول والطاقم والبنية التحتية عند الطلب.',
    aud2Title: 'الوكالات الإعلانية',
    aud2Desc:  'دعم سلس للإعلانات التجارية والحملات والمحتوى المدعوم من الملخص حتى التسليم.',
    aud3Title: 'العاملون المستقلون',
    aud3Desc:  'دعم إنتاجي مرن مصمم للمحترفين المستقلين والفرق الصغيرة.',

    /* HOME — TRUSTED BY */
    trustedEyebrow:  'يثقون بنا',
    trustedHeading:  'علامات تجارية وإنتاجات',
    trustedHeadingAc:'عملنا معها',

    /* HOME — FINAL CTA */
    ctaHeading:  'خطط',
    ctaHeadingAc:'لإنتاجك',
    ctaSub:      'أخبرنا بما تصور — سنتكفل بالتنفيذ من البداية حتى النهاية.',
    ctaBtn:      'ابدأ مشروعك',
    ctaBtnGhost: 'تحميل ملف الشركة',

    /* EMAIL MODAL */
    modalTitle:  'تحميل ملف الشركة',
    modalSub:    'أدخل بريدك الإلكتروني للمتابعة',
    modalBtn:    'تحميل',
    modalCancel: 'إلغاء',

    /* SERVICES PAGE */
    servicesPageEyebrow:  'خدماتنا',
    servicesPageH1a: 'ما الذي',
    servicesPageH1b: 'نقدمه.',
    servicesPageDesc: 'أربع طرق للعمل مع آبل بوكس — من الإدارة الإنتاجية الكاملة إلى تأجير المعدات المستقل. كل خدمة متاحة بشكل منفرد أو مدمجة في إعداد إنتاجي متكامل.',
    svc1Label: 'الخدمة ٠١', svc1Short: 'إنتاج\nكامل',
    svc2Label: 'الخدمة ٠٢', svc2Short: 'وحدة\nإنتاج',
    svc3Label: 'الخدمة ٠٣', svc3Short: 'إيجار\nات',
    svc4Label: 'الخدمة ٠٤', svc4Short: 'تموين',
    svcBtn: 'ابدأ المشروع ←',

    svc1FullTitle: 'خدمة الإنتاج الكامل',
    svc1FullDesc: 'إدارة إنتاجية شاملة من الألف إلى الياء — تخطيط وطاقم وأسطول وتنفيذ تحت نظام واحد. تعمل آبل بوكس كشريكك التشغيلي الوحيد من أول ملخص حتى انتهاء التصوير.',
    svc2FullTitle: 'خدمة الوحدة الإنتاجية',
    svc2FullDesc: 'دعم تنفيذي محلي للإنتاجات الدولية والإقليمية في المملكة العربية السعودية. تنضم آبل بوكس مباشرة إلى هيكلك الإنتاجي القائم — توفير طاقم محلي وتصاريح وأسطول ولوجستيات دون تعطيل سير عملك.',
    svc3FullTitle: 'الإيجارات',
    svc3FullDesc: 'مركبات وأجهزة ووحدات تقنية للإنتاج متاحة عند الطلب — بشكل مستقل أو مدمجة في إعداد إنتاجي متكامل. تشمل قائمة الإيجار سيارات الإنتاج وشاحنات الوحدات ومحطات DIT والمولدات وشاحنات الملابس ووسائل نقل الطاقم ووحدات التموين.',
    svc4FullTitle: 'خدمة التموين',
    svc4FullDesc: 'تموين احترافي على موقع التصوير وخدمات ضيافة ومحطات قهوة لإبقاء الطاقم منتجًا طوال اليوم. مبنية خصيصًا لبيئات الإنتاج — وجبات ساخنة وقوائم تراعي الخيارات الغذائية وعروض ضيافة ومحطات قهوة احترافية.',

    /* FLEET PAGE */
    fleetEyebrow:  'الأسطول',
    fleetH1a: 'مبني للإنتاج.',
    fleetH1b: 'جاهز للنشر.',
    fleetH1c: '',
    fleetIntro1: 'تشغّل آبل بوكس أسطولًا مكوّنًا من 9 مركبات إنتاجية متخصصة — تغطي دعم الوحدات والملابس والنظافة ومرافق المواهب ونقل الطاقم. كل مركبة جاهزة للعمل ومؤمّنة بالكامل بطاقم ذي خبرة.',
    fleetIntro2: 'سيارة الوحدة · شاحنة الإنتاج · سيارة الدعم · شاحنات الملابس · وحدة المراحيض · هانيواجون · كارافان VIP · نقل الطاقم',
    fleetCtaH:   'انشر الأسطول',
    fleetCtaHac: 'في تصويرك القادم',
    fleetCtaSub: 'أخبرنا بتواريخ التصوير والمواقع وسنبني الباقة المناسبة.',
    fleetCtaBtn: 'اطلب عرض سعر',
    fleetBestFor:'الأنسب لـ',

    /* ABOUT PAGE */
    aboutEyebrow: 'من نحن',
    aboutH1a: 'المنظومة',
    aboutH1b: 'الإنتاجية',
    aboutH1c: 'المتكاملة',
    aboutLead: 'بُنيت آبل بوكس على ملاحظة بسيطة: لا تفشل الإنتاجات العظيمة بسبب غياب المواهب الإبداعية، بل بسبب غياب البنية التحتية التشغيلية. نحن حللنا هذه المعضلة.',
    aboutSub: 'تأسست في المملكة العربية السعودية وتعمل عبر المملكة وخارجها، قضت آبل بوكس أكثر من 7 سنوات في بناء البنية التحتية الإنتاجية التي يعتمد عليها المخرجون والوكالات والأطقم الدولية.',
    aboutStoryLabel: 'قصتنا',
    aboutQuote: '"لم نكن نسعى لأن نكون شركة إنتاج. كنا نسعى لنكون السبب في ألّا تفشل الإنتاجات."',
    aboutP1: 'بدأ الأمر بسيارة إنتاج واحدة واعتقاد بأن المملكة العربية السعودية تستحق بنية تحتية إنتاجية على مستوى عالمي. ومن تلك التصويرات الأولى، نمت آبل بوكس — مضيفةً مركبات وطواقم وقدرات وعملاء عامًا بعد عام.',
    aboutP2: 'اليوم، ندير أحد أكبر أساطيل الإنتاج المتخصصة في المملكة العربية السعودية، وندعم إنتاجات دولية من شتى أنحاء العالم، ونشكّل العمود الفقري التحتي لأكثر الأعمال الإبداعية طموحًا في المملكة.',
    aboutP3: 'مع تسارع الاقتصاد الإبداعي في المملكة العربية السعودية في إطار رؤية 2030، آبل بوكس لا تلحق بالركب — بل كانت دائمًا في الطليعة.',
    pillar1Title: 'الدقة',
    pillar1Desc: 'كل سيارة تُجهَّز بنفس الأسلوب. كل موعد انطلاق يُحترم. كل قطعة معدات تُفحص قبل مغادرة الورشة. الدقة ليست قيمة — إنها معيار تشغيلي.',
    pillar2Title: 'المسؤولية',
    pillar2Desc: 'لديك نقطة تواصل واحدة. يردون من الرنة الأولى. تُحل المشكلات قبل أن تعلم بها. هذا هو معيار آبل بوكس.',
    pillar3Title: 'قابلية التوسع',
    pillar3Desc: 'من سيارة طاقم واحدة ليوم تصوير واحد إلى نشر أسطول كامل لفيلم مدته 60 يومًا — نتوسع دون المساس بجودة التنفيذ.',

    /* PROJECTS PAGE */
    projectsEyebrow: 'أعمال مختارة',
    projectsH1: 'المشاريع',
    projectsDesc: 'من أفلام الطول الكامل الدولية إلى الإعلانات التجارية المحلية — مجموعة مختارة من الإنتاجات التي دعمتها آبل بوكس عبر المملكة العربية السعودية.',
    projectsCta: 'هل أنت مستعد لإضافة إنتاجك إلى هذه القائمة؟',
    projectsCtaBtn: 'ابدأ مشروعك',

    /* CONTACT PAGE */
    contactEyebrow: 'تواصل معنا',
    contactH1a: 'لنبنِ',
    contactH1b: 'شيئًا',
    contactH1c: 'مميزًا.',
    contactDesc: 'أخبرنا عن إنتاجك. نظرة عامة مختصرة تكفي. سنرد خلال 24 ساعة بمقترح أولي.',
    contactRentalNote: 'تحتاج فقط إلى إيجارات أو نقل؟ اذكر ذلك فحسب — سنرد سريعًا.',
    contactLocLabel: 'الموقع',
    contactLocVal1: 'الرياض، المملكة العربية السعودية',
    contactLocVal2: 'جدة، المملكة العربية السعودية',
    contactOpsLabel: 'نطاق العمل',
    contactOpsVal: 'نشر على مستوى المملكة',
    contactPhoneLabel: 'الهاتف',
    contactWaLabel: 'واتساب',
    contactFormHeading: 'ابدأ مشروعك',
    contactSuccess: 'تم إرسال طلبك بنجاح. سنتواصل معك خلال 24 ساعة.',
    contactError:   'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.',
    formLabelName:    'الاسم الكامل',
    formLabelCompany: 'الشركة',
    formLabelEmail:   'البريد الإلكتروني',
    formLabelSupport: 'نوع الدعم',
    formLabelType:    'نوع المشروع',
    formLabelDates:   'تواريخ التصوير',
    formLabelCrew:    'حجم الطاقم',
    formLabelBrief:   'ملخص المشروع',
    formPlaceholderName:    'الاسم الكامل',
    formPlaceholderCompany: 'شركة الإنتاج أو الوكالة',
    formPlaceholderEmail:   'بريدك@شركتك.com',
    formPlaceholderSupport: 'ما الذي تحتاجه؟',
    formPlaceholderType:    'اختر نوع المشروع',
    formPlaceholderDates:   'التواريخ التقريبية أو الفترة الزمنية',
    formPlaceholderCrew:    'العدد التقريبي للطاقم',
    formPlaceholderBrief:   'أخبرنا عن إنتاجك — النطاق والمواقع والمتطلبات الرئيسية والجدول الزمني المفضل.',
    formSubmit: 'إرسال الطلب ←',
    formSubmitRental: 'طلب عرض سعر إيجار ←',
    formOptFPS:  'إنتاج كامل',
    formOptUnit: 'وحدة إنتاجية',
    formOptRent: 'إيجار أسطول / معدات',
    formOptTrans:'نقل فقط',
    formOptFF:   'فيلم طويل',
    formOptTVC:  'إعلان تجاري',
    formOptDrama:'مسلسل درامي',
    formOptMV:   'فيديو موسيقي',
    formOptBrand:'محتوى إعلاني',
    formOptIntl: 'إنتاج دولي',
    formOptOther:'أخرى',

    /* FOOTER */
    footerCopy: '© ٢٠٢٦ آبل بوكس لخدمات الإنتاج · المملكة العربية السعودية',
    footerAbout:'من نحن', footerServices:'الخدمات', footerFleet:'الأسطول',
    footerProjects:'المشاريع', footerContact:'تواصل معنا',
  }
};

/* ─────────────────────────────────────────
   CURRENT LANGUAGE STATE
───────────────────────────────────────── */
var currentLang = 'en';

/* ─────────────────────────────────────────
   APPLY TRANSLATIONS
   Uses data-i18n attributes on elements.
   Falls back gracefully if key missing.
───────────────────────────────────────── */
function applyTranslations(lang) {
  var t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      /* Detect if element has child elements that should be preserved */
      if (el.children.length > 0 && el.getAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  /* Special: elements with data-i18n-href (WhatsApp message etc.) */
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
}

/* ─────────────────────────────────────────
   SWITCH LANGUAGE
───────────────────────────────────────── */
function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  var html = document.documentElement;
  var body = document.body;

  /* Suppress transitions during switch to prevent flicker */
  body.style.transition = 'none';

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    body.classList.add('rtl');

    /* Switch logo if Arabic version exists */
    var logos = document.querySelectorAll('.nav-logo img, .footer-left img');
    logos.forEach(function (img) {
      if (img.dataset.logoAr) img.src = img.dataset.logoAr;
    });
  } else {
    html.setAttribute('lang', 'en');
    html.removeAttribute('dir');
    body.classList.remove('rtl');

    /* Restore English logo */
    var logos = document.querySelectorAll('.nav-logo img, .footer-left img');
    logos.forEach(function (img) {
      if (img.dataset.logoEn) img.src = img.dataset.logoEn;
    });
  }

  applyTranslations(lang);

  /* Update switcher button states */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* Persist preference */
  try { localStorage.setItem('ab_lang', lang); } catch (e) {}

  /* Re-enable transitions after paint */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      body.style.transition = '';
    });
  });
}

/* ─────────────────────────────────────────
   GLOBAL FUNCTIONS
   (attached to window for inline onclick)
───────────────────────────────────────── */

window.showPage = function (id, pushHistory) {
  if (pushHistory !== false) {
    history.pushState({ page: id }, '', '#' + id);
  }

  var pages = document.querySelectorAll('.page');
  pages.forEach(function (p) {
    p.classList.remove('active');
    p.setAttribute('aria-hidden', 'true');
  });

  var target = document.getElementById('page-' + id);
  if (!target) return;

  target.classList.add('active');
  target.removeAttribute('aria-hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });

  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    a.classList.toggle('nav-active', a.getAttribute('data-page') === id);
  });
  if (id === 'projects') {
    document.querySelectorAll('#page-projects .bts-video').forEach(function(v) {
      v.load();
    });
  }
};

// Handle back/forward buttons
window.addEventListener('popstate', function(e) {
  if (e.state && e.state.page) {
    showPage(e.state.page, false);
  } else {
    showPage('home', false);
  }
});

// Set initial history state
history.replaceState({ page: 'home' }, '', window.location.href);

window.goToService = function (sectionId) {
  showPage('services');
  setTimeout(function () {
    var section = document.getElementById(sectionId);
    var nav     = document.getElementById('main-nav');
    if (!section) return;
    var offset = nav ? nav.offsetHeight + 20 : 20;
    var top    = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }, 80);
};

window.openModal = function () {
  var modal = document.getElementById('emailModal');
  if (!modal) return;
  modal.style.display = 'flex';
  var firstInput = modal.querySelector('input');
  if (firstInput) setTimeout(function () { firstInput.focus(); }, 50);
};

window.closeModal = function () {
  var modal = document.getElementById('emailModal');
  if (modal) modal.style.display = 'none';
};

window.submitEmail = function () {
  var input = document.getElementById('userEmail');
  if (!input) return;
  var email = input.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    _shakeElement(input);
    return;
  }
  window.open('files/company-profile.pdf', '_blank');
  closeModal();
  input.value = '';
};

/* ─────────────────────────────────────────
   PRIVATE UTILITIES
───────────────────────────────────────── */

function _shakeElement(el) {
  if (!el) return;
  el.style.borderColor = '#e05252';
  var offsets = [7, -7, 5, -5, 3, -3, 0];
  var i = 0;
  var iv = setInterval(function () {
    el.style.transform = 'translateX(' + (offsets[i] || 0) + 'px)';
    i++;
    if (i >= offsets.length) { clearInterval(iv); el.style.transform = ''; }
  }, 45);
}

function _calcPriority(data) {
  var crew = parseInt((data.crewSize || '').replace(/\D/g, ''), 10) || 0;
  var bigTypes   = ['Feature Film', 'International Production', 'Drama Series'];
  var isFullProd = data.supportType === 'Full Production Support' || data.supportType === 'Unit Production';
  var isBigType  = bigTypes.indexOf(data.projectType) !== -1;
  if (crew >= 50 || (isBigType && isFullProd)) return '🔴 HIGH PRIORITY';
  if (crew >= 20 || isBigType || isFullProd)   return '🟡 STANDARD';
  return '🟢 QUICK RESPONSE';
}

function _val(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

/* ─────────────────────────────────────────
   DOM READY
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

  /* Stamp aria-hidden on inactive pages */
  document.querySelectorAll('.page:not(.active)').forEach(function (p) {
    p.setAttribute('aria-hidden', 'true');
  });

  /* Wire data-page onto nav links */
  var pageLabels = { Home: 'home', About: 'about', Services: 'services', Fleet: 'fleet', Projects: 'projects' };
  document.querySelectorAll('.nav-links > a').forEach(function (a) {
    var pg = pageLabels[a.textContent.trim()];
    if (pg) a.setAttribute('data-page', pg);
  });

  /* ── LANGUAGE SWITCHER INIT ── */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });

  /* Restore saved language preference */
  var saved = '';
  try { saved = localStorage.getItem('ab_lang') || ''; } catch (e) {}
  if (saved === 'ar') {
    switchLanguage('ar');
  } else {
    /* Ensure EN button is marked active on first load */
    var enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    if (enBtn) enBtn.classList.add('active');
  }

  /* ── NAV SCROLL EFFECT ── */
  var mainNav = document.getElementById('main-nav');
  if (mainNav) {
    window.addEventListener('scroll', function () {
      mainNav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── KEYBOARD SHORTCUTS ── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var gm = document.getElementById('galleryModal');
    if (gm && gm.classList.contains('active')) {
      var gc = gm.querySelector('.gallery-close');
      if (gc) gc.click();
      return;
    }
    var em = document.getElementById('emailModal');
    if (em && em.style.display === 'flex') closeModal();
  });

  /* ── SCROLL REVEAL ── */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObs.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll(
      '.why-item, .service-card, .pillar-card, .audience-card, .process-step, .stat-item, .fleet-section'
    ).forEach(function (el) { el.classList.add('reveal'); revealObs.observe(el); });
  }

  /* ── LAZY LOAD MEDIA ── */
  if ('IntersectionObserver' in window) {
    var lazyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.tagName === 'IMG' && el.dataset.src) { el.src = el.dataset.src; el.removeAttribute('data-src'); }
        if (el.tagName === 'VIDEO') {
          el.querySelectorAll('source[data-src]').forEach(function (s) { s.src = s.dataset.src; s.removeAttribute('data-src'); });
          el.load();
        }
        lazyObs.unobserve(el);
      });
    }, { rootMargin: '300px 0px' });
    document.querySelectorAll('img.gallery-item, video.gallery-item').forEach(function (el) { lazyObs.observe(el); });
  }

  /* ── GALLERY MODAL ── */
  (function initGallery() {
    var modal    = document.getElementById('galleryModal');
    if (!modal) return;
    var modalImg = document.getElementById('galleryModalImg');
    var modalVid = document.getElementById('galleryModalVideo');
    var closeBtn = modal.querySelector('.gallery-close');
    var nextBtn  = modal.querySelector('.gallery-nav.right');
    var prevBtn  = modal.querySelector('.gallery-nav.left');
   var items = [];
var current = 0;

function refreshItems() {
  var activePage = document.querySelector('.page.active');
  items = activePage ? Array.from(activePage.querySelectorAll('.gallery-item')) : [];
}

refreshItems();

function openGallery() {
  refreshItems();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.setAttribute('aria-modal','true');
  if (closeBtn) closeBtn.focus();
}
    function closeGallery() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  modal.removeAttribute('aria-modal');
  if (modalVid) { modalVid.pause(); modalVid.src=''; modalVid.style.display='none'; }
  if (modalImg) { modalImg.style.display='none'; modalImg.src=''; }
  if (nextBtn) nextBtn.onclick = null;
  if (prevBtn) prevBtn.onclick = null;
}

    function showItem(index) {
      var el = items[index];
      if (!el) return;
      if (modalImg) modalImg.style.display = 'none';
      if (modalVid) { modalVid.style.display = 'none'; modalVid.pause(); }
      if (el.tagName === 'IMG') { if (modalImg) { modalImg.src = el.src; modalImg.alt = el.alt||''; modalImg.style.display = 'block'; } }
      else if (el.tagName === 'VIDEO') { var s = el.querySelector('source'); var src = (s&&s.src)?s.src:el.src; if (modalVid) { modalVid.src=src; modalVid.style.display='block'; modalVid.play().catch(function(){}); } }
    }

    document.querySelectorAll('.gallery-item').forEach(function(el) {
      el.style.cursor = 'pointer';
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', 'View in gallery');
      el.addEventListener('click', function() {
        refreshItems();
        current = items.indexOf(el);
        if (current === -1) return;
        openGallery();
        showItem(current);
      });
      el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          refreshItems();
          current = items.indexOf(el);
          if (current === -1) return;
          openGallery();
          showItem(current);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeGallery);
    modal.addEventListener('click', function(e){ if(e.target===modal) closeGallery(); });
    if (nextBtn) nextBtn.addEventListener('click', function(){ current=(current+1)%items.length; showItem(current); });
    if (prevBtn) prevBtn.addEventListener('click', function(){ current=(current-1+items.length)%items.length; showItem(current); });
    document.addEventListener('keydown', function(e){ if(!modal.classList.contains('active')) return; if(e.key==='ArrowRight'&&nextBtn) nextBtn.click(); if(e.key==='ArrowLeft'&&prevBtn) prevBtn.click(); });
    var touchStartX=0;
    modal.addEventListener('touchstart', function(e){ touchStartX=e.touches[0].clientX; }, {passive:true});
    modal.addEventListener('touchend',   function(e){ var dx=e.changedTouches[0].clientX-touchStartX; if(dx<-50&&nextBtn) nextBtn.click(); if(dx>50&&prevBtn) prevBtn.click(); }, {passive:true});
  })();

  /* ── CONTACT FORM ── */
  (function initContactForm() {
    var form      = document.getElementById('contactForm');
    if (!form) return;
    var submitBtn  = document.getElementById('cf-submit');
    var successBox = document.getElementById('form-success');
    var errorBox   = document.getElementById('form-error');
    var errorText  = document.getElementById('form-error-text');
    var supportSel = document.getElementById('cf-support');

    function updateFormMode() {
      if (!supportSel) return;
      var sv    = supportSel.value;
      var light = sv === 'Fleet / Equipment Rental' || sv === 'Transport Only';
      var tg    = document.getElementById('cf-type-group');
      if (tg) tg.style.display = light ? 'none' : '';
      var brief = document.getElementById('cf-brief');
      var t = TRANSLATIONS[currentLang];
      if (brief) brief.placeholder = light ? (t.formPlaceholderBrief || '') : (t.formPlaceholderBrief || '');
      if (submitBtn && !submitBtn.disabled) submitBtn.textContent = light ? (t.formSubmitRental || 'Request Rental Quote →') : (t.formSubmit || 'Send Request →');
    }

    if (supportSel) { supportSel.addEventListener('change', updateFormMode); updateFormMode(); }

    function showSuccess() { if(successBox){successBox.style.display='block'; successBox.scrollIntoView({behavior:'smooth',block:'nearest'});} if(errorBox) errorBox.style.display='none'; }
    function showError(msg){ if(errorText) errorText.textContent=msg; if(errorBox){errorBox.style.display='block'; errorBox.scrollIntoView({behavior:'smooth',block:'nearest'});} if(successBox) successBox.style.display='none'; }
    function hideMessages(){ if(successBox) successBox.style.display='none'; if(errorBox) errorBox.style.display='none'; }

    function setLoading(on) {
      if (!submitBtn) return;
      submitBtn.disabled = on;
      var t = TRANSLATIONS[currentLang];
      if (on) { submitBtn.innerHTML = '<span class="btn-spinner"></span> ' + (currentLang==='ar'?'جارٍ الإرسال…':'Sending…'); }
      else { var sv=supportSel?supportSel.value:''; submitBtn.textContent=(sv==='Fleet / Equipment Rental'||sv==='Transport Only')?(t.formSubmitRental||'Request Rental Quote →'):(t.formSubmit||'Send Request →'); }
    }

    var EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validate(data) {
      var t = TRANSLATIONS[currentLang];
      if (!data.name)                return { field:'cf-name',    msg: t.formLabelName+' '+( currentLang==='ar'?'مطلوب':'is required.') };
      if (!EMAIL_RX.test(data.email)) return { field:'cf-email',  msg: currentLang==='ar'?'أدخل بريدًا إلكترونيًا صحيحًا.':'Please enter a valid email address.' };
      if (!data.supportType)          return { field:'cf-support', msg: currentLang==='ar'?'يرجى اختيار نوع الدعم.':'Please select a support type.' };
      return null;
    }

    function highlightField(id) { var el=document.getElementById(id); if(!el) return; el.focus(); _shakeElement(el); el.addEventListener('input',function clear(){ el.style.borderColor=''; el.removeEventListener('input',clear); },{once:true}); }

    form.addEventListener('submit', async function(e) {
      e.preventDefault(); hideMessages();
      var data = { name:_val('cf-name'), company:_val('cf-company'), email:_val('cf-email'), supportType:_val('cf-support'), projectType:_val('cf-type'), shootDates:_val('cf-dates'), crewSize:_val('cf-crew'), projectBrief:_val('cf-brief') };
      data.priority = _calcPriority(data);
      var err = validate(data);
      if (err) { showError(err.msg); highlightField(err.field); return; }
      setLoading(true);
      try {
        var response = await fetch('http://localhost:4000/send-email', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
        var result   = await response.json();
        if (response.ok && result.success) { showSuccess(); form.reset(); updateFormMode(); }
        else { showError((result.message||'Error')+(currentLang==='ar'?' أو تواصل عبر واتساب.':" Or reach us on WhatsApp.")); }
      } catch(fetchErr) {
        console.error('[AppleBox Form]', fetchErr);
        showError(currentLang==='ar'?'تعذّر الاتصال. تواصل معنا مباشرةً عبر واتساب.':'Unable to connect. Please contact us via WhatsApp.');
      } finally { setLoading(false); }
    });

    form.querySelectorAll('input, select, textarea').forEach(function(el) {
      el.addEventListener('input',  function(){ el.style.borderColor=''; });
      el.addEventListener('change', function(){ el.style.borderColor=''; });
    });
  })();

});

// LOADING SCREEN 
window.addEventListener('load', () => {
  document.body.classList.add('loading');

  if (window.innerWidth > 768) {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      document.body.classList.remove('loading');
    }, 1500);

  } else {
    const loader = document.getElementById("loader-mobile");
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      loader.style.pointerEvents = "none";
      setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.remove('loading');
      }, 500);
    }, 1500);
  }

});
function openYT(videoId) {
  if (!videoId || videoId.startsWith('YOUTUBE_ID')) {
    alert('YouTube link not set yet.');
    return;
  }
  window.open('https://www.youtube.com/watch?v=' + videoId, '_blank');
}

function closeYT() {
  document.getElementById('yt-iframe').src = '';
  document.getElementById('yt-modal').style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('yt-modal');
  if (modal) modal.addEventListener('click', function(e) { if (e.target === modal) closeYT(); });
});

/* ── BTS FULLSCREEN MODAL ── */
const btsVideos = [
  { src: 'pages/projectpage/bts/Adidas - Big Foot X Elephant Labs.mp4', label: 'JEDDAH', client: 'ELEPHANT LAB', name: 'ADIDAS – BIG FOOT' },
  { src: 'pages/projectpage/bts/Adidas - Two Plus One.mp4', label: 'RIYADH', client: 'ADIDAS', name: 'TWO PLUS ONE' },
  { src: 'pages/projectpage/bts/Asliyah - Alternative Everything.mp4', label: 'JEDDAH', client: 'ASLIYAH', name: 'ALTERNATIVE EVERYTHING' },
  { src: 'pages/projectpage/bts/Flyadeal - Telfaz.mp4', label: 'JEDDAH', client: 'TELFAZ', name: 'FLYADEAL CAMPAIGN' },
  { src: 'pages/projectpage/bts/Maadan Snd - Purple Brain.mp4', label: 'RIYADH', client: 'PURPLE BRAIN', name: 'MAADAN SAUDI NATIONAL DAY' },
  { src: 'pages/projectpage/bts/Keeta - Digitech.mp4', label: 'JEDDAH', client: 'DIGITECH', name: 'KEETA CAMPAIGN' },
  { src: 'pages/projectpage/bts/National Cybersecurity Authority - Salham.mp4', label: 'RIYADH', client: 'SALHAM', name: 'NATIONAL CYBERSECURITY AUTHORITY' },
  { src: 'pages/projectpage/bts/Diriyah Gate Development Authrity - Two Tales.mp4', label: 'RIYADH', client: 'TWO TALES', name: 'DIRIYAH GATE DEVELOPMENT AUTHORITY' },
  { src: 'pages/projectpage/bts/Tres Content - Toyota Ad Shoot.mp4', label: 'JEDDAH', client: 'TRÈS CONTENT', name: 'TOYOTA AD SHOOT' },
  { src: 'pages/projectpage/bts/Two Tales - Toyota Ad.mp4', label: 'DAMMAM', client: 'TWO TALES', name: 'TOYOTA AD SHOOT' },
  { src: 'pages/projectpage/bts/Dna Studio - Ministry Of National Guard.mp4', label: 'RIYADH', client: 'DNA STUDIO', name: 'MINISTRY OF NATIONAL GUARD' },
  { src: 'pages/projectpage/bts/Scar Studio - Nescafe.mp4', label: 'RIYADH', client: 'SCAR STUDIO', name: 'NESCAFE' },
  { src: 'pages/projectpage/bts/Clandestino - Goat Shoot , Riyadh.mp4', label: 'RIYADH', client: 'CLANDESTINO', name: 'VISIT SAUDI' },
];

function buildBTSTrack() {
  const track = document.getElementById('bts-track');
  if (!track) return;

  [...btsVideos, ...btsVideos].forEach(function(item, index) {
    const card = document.createElement('div');
    card.className = 'bts-card';
    card.innerHTML = `
      <div class="bts-thumb">
        <video muted loop playsinline preload="none" class="bts-video">
          <source src="${item.src}" type="video/mp4">
        </video>
        <div class="bts-overlay"></div>
        <div class="bts-label">${item.label}</div>
      </div>
      <div class="bts-info">
        <div class="bts-client">${item.client}</div>
        <div class="bts-name">${item.name}</div>
      </div>
    `;

    const video = card.querySelector('.bts-video');
    card.addEventListener('mouseenter', function() { video.play().catch(function(){}); });
    card.addEventListener('mouseleave', function() { video.pause(); video.currentTime = 0; });

    card.addEventListener('click', function() {
      const modal = document.getElementById('galleryModal');
      const modalVid = document.getElementById('galleryModalVideo');
      const modalImg = document.getElementById('galleryModalImg');
      if (!modal || !modalVid) return;
      let current = index % btsVideos.length;
      modalVid.src = btsVideos[current].src;
      modalVid.style.display = 'block';
      modalImg.style.display = 'none';
      modal.classList.add('active');
      modalVid.play().catch(function(){});
      document.body.style.overflow = 'hidden';

      modal.querySelector('.gallery-nav.right').onclick = function() {
        current = (current + 1) % btsVideos.length;
        modalVid.src = btsVideos[current].src;
        modalVid.play().catch(function(){});
      };
      modal.querySelector('.gallery-nav.left').onclick = function() {
        current = (current - 1 + btsVideos.length) % btsVideos.length;
        modalVid.src = btsVideos[current].src;
        modalVid.play().catch(function(){});
      };
    });

    track.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', buildBTSTrack);
/* ── MOBILE NAV ── */
function openMobileNav() {
  var overlay = document.getElementById('mobile-nav-overlay');
  overlay.classList.add('active');
  overlay.style.pointerEvents = 'all';
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  var overlay = document.getElementById('mobile-nav-overlay');
  overlay.classList.remove('active');
  overlay.style.pointerEvents = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('nav-hamburger');
  var closeBtn  = document.getElementById('mobile-nav-close');
  if (hamburger) hamburger.addEventListener('click', openMobileNav);
  if (closeBtn)  closeBtn.addEventListener('click', closeMobileNav);
});
// LAZY LOAD VIDEOS
document.addEventListener('DOMContentLoaded', function() {
  const lazyVideos = document.querySelectorAll('video[preload="none"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.load();
        observer.unobserve(video);
      }
    });
  }, { rootMargin: '200px' });
  lazyVideos.forEach(v => observer.observe(v));
});
/* ── COUNTER ANIMATION ── */
function animateCounter(el, target, duration) {
  if (!el) return;
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(function() {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start);
  }, 16);
}

function runCounters() {
  animateCounter(document.querySelector('.stat-item:nth-child(1) .stat-count'), 7, 1500);
  animateCounter(document.querySelector('.stat-item:nth-child(2) .stat-count'), 10, 1500);
  animateCounter(document.querySelector('.stat-item:nth-child(3) .stat-count'), 600, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  const statsBar = document.querySelector('.stats-bar');
  if (!statsBar) return;

  let triggered = false;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        runCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px' });

  observer.observe(statsBar);
});