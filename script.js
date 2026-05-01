/* ═══════════════════════════════════════════
   APPLEBOX — MAIN SCRIPT  v4.0
   Sections:
     1. Translation Dictionary
     2. Language System
     3. Page Navigation
     4. Loader
     5. Nav (Scroll + Hamburger)
     6. Gallery Modal
     7. Contact Form
     8. BTS Carousel
     9. Scroll Reveal
    10. Lazy Load Videos
    11. Counter Animation
    12. Utilities
═══════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   1. TRANSLATION DICTIONARY
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

    /* STATS */
    stat1Label: 'Years in Production',
    stat2Label: 'Fleet Vehicles',
    stat3Label: 'Productions Supported',
    stat4Label: 'Integrated Ecosystem',

    /* HOME — SERVICES */
    servicesEyebrow:   'What We Do',
    servicesHeading:   'OUR',
    servicesHeadingAc: 'SERVICES',
    svc1Title: 'Full Production Service',
    svc1Desc:  'Complete end-to-end production management covering pre-production, crew coordination, logistics, fleet deployment, and full on-set execution — handled by one integrated team from start to final wrap.',
    svc2Title: 'Unit Production Service',
    svc2Desc:  'Dedicated on-ground production support for projects shooting in Saudi Arabia, including local crew, permits, logistics, and fleet — ensuring smooth execution for international and regional teams.',
    svc3Title: 'Rentals',
    svc3Desc:  'A full range of production-ready vehicles and equipment including production vans, generators, DIT stations, and crew support units — available as standalone rentals or integrated into your production setup.',
    svc4Title: 'Catering',
    svc4Desc:  'Professional on-set catering solutions including hot meals, craft services, and barista coffee stations — designed to keep cast and crew energized, comfortable, and performing throughout the day.',

    /* HOME — WHY US */
    whyEyebrow:   'Why AppleBox',
    whyHeading:   'WHAT SETS US',
    whyHeadingAc: 'APART',
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
    processEyebrow:   'How It Works',
    processHeading:   'FROM BRIEF',
    processHeadingAc: 'TO SCREEN',
    proc1Title: 'Brief & Scope',       proc1Desc: 'Tell us your project — dates, locations, crew size.',
    proc2Title: 'Custom Proposal',     proc2Desc: 'We build a tailored package with fleet and crew requirements.',
    proc3Title: 'Production Planning', proc3Desc: 'Permits, logistics, crew scheduling, equipment lock.',
    proc4Title: 'On-Set Execution',    proc4Desc: 'Fleet deployed. Crew on standby. Full support call to wrap.',
    proc5Title: 'Wrap & Debrief',      proc5Desc: 'Clean breakdown, DIT handoff, readiness for next shoot.',

    /* HOME — AUDIENCE */
    audienceEyebrow:   'Who We Work With',
    audienceHeading:   'PRODUCTION',
    audienceHeadingAc: 'TEAMS WE SUPPORT',
    aud1Title: 'Production Houses (Local & International)',
    aud1Desc:  'We operate as your execution arm on the ground — deploying fleet, crew, and infrastructure on demand.',
    aud2Title: 'Agencies',
    aud2Desc:  'Seamless support for TVCs, campaigns, and branded content from brief to final wrap.',
    aud3Title: 'Freelancers',
    aud3Desc:  'Flexible production support tailored for independent professionals and small teams.',

    /* HOME — TRUSTED BY */
    trustedEyebrow:   'Trusted By',
    trustedHeading:   'BRANDS & PRODUCTIONS',
    trustedHeadingAc: "WE'VE WORKED WITH",

    /* HOME — FINAL CTA */
    ctaHeading:   'PLAN YOUR',
    ctaHeadingAc: 'PRODUCTION',
    ctaSub:       "Tell us what you're shooting — we'll handle the execution from start to wrap.",
    ctaBtn:       'Start a Project',
    ctaBtnGhost:  'Download Company Profile',

    /* EMAIL MODAL */
    modalTitle:  'Download Company Profile',
    modalSub:    'Enter your email to continue',
    modalBtn:    'Download',
    modalCancel: 'Cancel',

    /* SERVICES PAGE */
    servicesPageEyebrow: 'Our Services',
    servicesPageH1a:     'WHAT WE',
    servicesPageH1b:     'OFFER.',
    servicesPageDesc:    'Four ways to work with AppleBox — from complete production management to standalone equipment rentals. Every service is available independently or combined into a full production setup.',

    /* FLEET PAGE */
    fleetEyebrow: 'The Fleet',
    fleetH1a:     'BUILT FOR',
    fleetH1b:     'PRODUCTION.',
    fleetH1c:     'READY TO DEPLOY.',
    fleetCtaH:    'DEPLOY THE FLEET',
    fleetCtaHac:  'ON YOUR NEXT SHOOT',
    fleetCtaSub:  "Tell us your production dates and locations. We'll build the right fleet package.",
    fleetCtaBtn:  'Request a Quote',

    /* ABOUT PAGE */
    aboutEyebrow:     'About AppleBox',
    aboutStoryLabel:  'Our Story',
    pillar1Title: 'Precision',
    pillar1Desc:  'Every van stocked the same way. Every call time met. Every piece of equipment checked before it leaves the yard. Precision is not a value — it is an operational standard.',
    pillar2Title: 'Accountability',
    pillar2Desc:  'You have one point of contact. They answer on the first ring. Problems are solved before you know they existed. That is the AppleBox standard.',
    pillar3Title: 'Scale',
    pillar3Desc:  'From a single crew van for a one-day shoot to a full fleet deployment for a 60-day feature — we scale without compromising quality of execution.',

    /* PROJECTS PAGE */
    projectsEyebrow: 'Selected Work',
    projectsH1:      'PROJECTS',
    projectsDesc:    'From international feature films to local TVCs — a selection of productions AppleBox has powered across Saudi Arabia.',

    /* CONTACT PAGE */
    contactEyebrow:    'Get in Touch',
    contactH1a:        "LET'S",
    contactH1b:        'BUILD',
    contactH1c:        'SOMETHING.',
    contactDesc:       "Tell us about your production. A brief overview is enough. We'll respond within 24 hours with an initial proposal.",
    contactRentalNote: "Need only rentals or transport? Just mention it — we'll respond fast.",
    contactLocLabel:   'Location',
    contactLocVal1:    'Riyadh, Saudi Arabia',
    contactLocVal2:    'Jeddah, Saudi Arabia',
    contactOpsLabel:   'Operations',
    contactOpsVal:     'Kingdom-wide deployment',
    contactPhoneLabel: 'Phone',
    contactWaLabel:    'WhatsApp',
    contactSuccess:    "Request sent successfully. We'll be in touch within 24 hours.",
    contactError:      'Something went wrong. Please try again or reach us via WhatsApp.',

    /* FORM */
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
    formSubmit:       'Send Request →',
    formSubmitRental: 'Request Rental Quote →',
    formOptFPS:   'Full Production Support',
    formOptUnit:  'Unit Production',
    formOptRent:  'Fleet / Equipment Rental',
    formOptTrans: 'Transport Only',
    formOptFF:    'Feature Film',
    formOptTVC:   'TVC / Commercial',
    formOptDrama: 'Drama Series',
    formOptMV:    'Music Video',
    formOptBrand: 'Branded Content',
    formOptIntl:  'International Production',
    formOptOther: 'Other',

    /* FOOTER */
    footerCopy:     '© 2026 AppleBox Production Services · Saudi Arabia',
    footerAbout:    'About',
    footerServices: 'Services',
    footerFleet:    'Fleet',
    footerProjects: 'Projects',
    footerContact:  'Contact',
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

    /* STATS */
    stat1Label: 'سنوات في الإنتاج',
    stat2Label: 'مركبة في الأسطول',
    stat3Label: 'إنتاج مدعوم',
    stat4Label: 'منظومة متكاملة',

    /* HOME — SERVICES */
    servicesEyebrow:   'ما نقدمه',
    servicesHeading:   'أربع طرق',
    servicesHeadingAc: 'للعمل معنا',
    svc1Title: 'خدمة الإنتاج الكامل',
    svc1Desc:  'إدارة إنتاجية شاملة من الألف إلى الياء — التخطيط، وتنسيق الطاقم، واللوجستيات، ونشر الأسطول، والتنفيذ الكامل على موقع التصوير — بيد فريق واحد متكامل.',
    svc2Title: 'خدمة الوحدة الإنتاجية',
    svc2Desc:  'دعم إنتاجي ميداني للمشاريع المصوَّرة في المملكة العربية السعودية، يشمل الطاقم المحلي والتصاريح واللوجستيات والأسطول.',
    svc3Title: 'الإيجارات',
    svc3Desc:  'مجموعة كاملة من مركبات الإنتاج والمعدات — متوفرة بشكل مستقل أو مدمجة ضمن إعداد الإنتاج الخاص بك.',
    svc4Title: 'خدمة التموين',
    svc4Desc:  'حلول تموين احترافية على موقع التصوير تشمل الوجبات الساخنة وخدمات الضيافة ومحطات القهوة — لإبقاء الطاقم في أفضل حالاته طوال اليوم.',

    /* HOME — WHY US */
    whyEyebrow:   'لماذا آبل بوكس',
    whyHeading:   'ما يميزنا',
    whyHeadingAc: 'عن غيرنا',
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
    proc1Title: 'الملخص والنطاق',       proc1Desc: 'أخبرنا بمشروعك — التواريخ والمواقع وحجم الطاقم.',
    proc2Title: 'العرض المخصص',         proc2Desc: 'نبني باقة مصممة خصيصًا لمتطلبات الأسطول والطاقم.',
    proc3Title: 'تخطيط الإنتاج',        proc3Desc: 'التصاريح واللوجستيات وجدولة الطاقم وتحديد المعدات.',
    proc4Title: 'التنفيذ الميداني',     proc4Desc: 'الأسطول جاهز. الطاقم في انتظارك. دعم كامل حتى انتهاء التصوير.',
    proc5Title: 'الإنهاء والمراجعة',    proc5Desc: 'تفكيك منظم وتسليم ملفات DIT والاستعداد للتصوير التالي.',

    /* HOME — AUDIENCE */
    audienceEyebrow:   'من نعمل معهم',
    audienceHeading:   'فرق الإنتاج',
    audienceHeadingAc: 'التي ندعمها',
    aud1Title: 'بيوت الإنتاج (محلية ودولية)',
    aud1Desc:  'نعمل كذراع تنفيذي على أرض الواقع — ننشر الأسطول والطاقم والبنية التحتية عند الطلب.',
    aud2Title: 'الوكالات الإعلانية',
    aud2Desc:  'دعم سلس للإعلانات التجارية والحملات والمحتوى المدعوم من الملخص حتى التسليم.',
    aud3Title: 'العاملون المستقلون',
    aud3Desc:  'دعم إنتاجي مرن مصمم للمحترفين المستقلين والفرق الصغيرة.',

    /* HOME — TRUSTED BY */
    trustedEyebrow:   'يثقون بنا',
    trustedHeading:   'علامات تجارية وإنتاجات',
    trustedHeadingAc: 'عملنا معها',

    /* HOME — FINAL CTA */
    ctaHeading:   'خطط',
    ctaHeadingAc: 'لإنتاجك',
    ctaSub:       'أخبرنا بما تصور — سنتكفل بالتنفيذ من البداية حتى النهاية.',
    ctaBtn:       'ابدأ مشروعك',
    ctaBtnGhost:  'تحميل ملف الشركة',

    /* EMAIL MODAL */
    modalTitle:  'تحميل ملف الشركة',
    modalSub:    'أدخل بريدك الإلكتروني للمتابعة',
    modalBtn:    'تحميل',
    modalCancel: 'إلغاء',

    /* SERVICES PAGE */
    servicesPageEyebrow: 'خدماتنا',
    servicesPageH1a:     'ما الذي',
    servicesPageH1b:     'نقدمه.',
    servicesPageDesc:    'أربع طرق للعمل مع آبل بوكس — من الإدارة الإنتاجية الكاملة إلى تأجير المعدات المستقل.',

    /* FLEET PAGE */
    fleetEyebrow: 'الأسطول',
    fleetH1a:     'مبني للإنتاج.',
    fleetH1b:     'جاهز للنشر.',
    fleetH1c:     '',
    fleetCtaH:    'انشر الأسطول',
    fleetCtaHac:  'في تصويرك القادم',
    fleetCtaSub:  'أخبرنا بتواريخ التصوير والمواقع وسنبني الباقة المناسبة.',
    fleetCtaBtn:  'اطلب عرض سعر',

    /* ABOUT PAGE */
    aboutEyebrow:    'من نحن',
    aboutStoryLabel: 'قصتنا',
    pillar1Title: 'الدقة',
    pillar1Desc:  'كل سيارة تُجهَّز بنفس الأسلوب. كل موعد انطلاق يُحترم. كل قطعة معدات تُفحص قبل مغادرة الورشة. الدقة ليست قيمة — إنها معيار تشغيلي.',
    pillar2Title: 'المسؤولية',
    pillar2Desc:  'لديك نقطة تواصل واحدة. يردون من الرنة الأولى. تُحل المشكلات قبل أن تعلم بها. هذا هو معيار آبل بوكس.',
    pillar3Title: 'قابلية التوسع',
    pillar3Desc:  'من سيارة طاقم واحدة ليوم تصوير واحد إلى نشر أسطول كامل لفيلم مدته 60 يومًا — نتوسع دون المساس بجودة التنفيذ.',

    /* PROJECTS PAGE */
    projectsEyebrow: 'أعمال مختارة',
    projectsH1:      'المشاريع',
    projectsDesc:    'من أفلام الطول الكامل الدولية إلى الإعلانات التجارية المحلية — مجموعة مختارة من الإنتاجات التي دعمتها آبل بوكس.',

    /* CONTACT PAGE */
    contactEyebrow:    'تواصل معنا',
    contactH1a:        'لنبنِ',
    contactH1b:        'شيئًا',
    contactH1c:        'مميزًا.',
    contactDesc:       'أخبرنا عن إنتاجك. نظرة عامة مختصرة تكفي. سنرد خلال 24 ساعة بمقترح أولي.',
    contactRentalNote: 'تحتاج فقط إلى إيجارات أو نقل؟ اذكر ذلك فحسب — سنرد سريعًا.',
    contactLocLabel:   'الموقع',
    contactLocVal1:    'الرياض، المملكة العربية السعودية',
    contactLocVal2:    'جدة، المملكة العربية السعودية',
    contactOpsLabel:   'نطاق العمل',
    contactOpsVal:     'نشر على مستوى المملكة',
    contactPhoneLabel: 'الهاتف',
    contactWaLabel:    'واتساب',
    contactSuccess:    'تم إرسال طلبك بنجاح. سنتواصل معك خلال 24 ساعة.',
    contactError:      'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.',

    /* FORM */
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
    formSubmit:       'إرسال الطلب ←',
    formSubmitRental: 'طلب عرض سعر إيجار ←',
    formOptFPS:   'إنتاج كامل',
    formOptUnit:  'وحدة إنتاجية',
    formOptRent:  'إيجار أسطول / معدات',
    formOptTrans: 'نقل فقط',
    formOptFF:    'فيلم طويل',
    formOptTVC:   'إعلان تجاري',
    formOptDrama: 'مسلسل درامي',
    formOptMV:    'فيديو موسيقي',
    formOptBrand: 'محتوى إعلاني',
    formOptIntl:  'إنتاج دولي',
    formOptOther: 'أخرى',

    /* FOOTER */
    footerCopy:     '© ٢٠٢٦ آبل بوكس لخدمات الإنتاج · المملكة العربية السعودية',
    footerAbout:    'من نحن',
    footerServices: 'الخدمات',
    footerFleet:    'الأسطول',
    footerProjects: 'المشاريع',
    footerContact:  'تواصل معنا',
  }
};

/* ─────────────────────────────────────────
   2. LANGUAGE SYSTEM
───────────────────────────────────────── */
var currentLang = 'en';

function applyTranslations(lang) {
  var t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else if (el.tagName === 'OPTION') {
      el.textContent = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  var html = document.documentElement;
  var body = document.body;

  /* Suppress layout transitions during switch */
  body.style.transition = 'none';

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    body.classList.add('rtl');
    document.querySelectorAll('.nav-logo img, .footer-left img').forEach(function (img) {
      if (img.dataset.logoAr) img.src = img.dataset.logoAr;
    });
  } else {
    html.setAttribute('lang', 'en');
    html.removeAttribute('dir');
    body.classList.remove('rtl');
    document.querySelectorAll('.nav-logo img, .footer-left img').forEach(function (img) {
      if (img.dataset.logoEn) img.src = img.dataset.logoEn;
    });
  }

  applyTranslations(lang);

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('ab_lang', lang); } catch (e) {}

  requestAnimationFrame(function () {
    requestAnimationFrame(function () { body.style.transition = ''; });
  });
}

/* ─────────────────────────────────────────
   3. PAGE NAVIGATION
───────────────────────────────────────── */
window.showPage = function (id, pushHistory) {
  if (pushHistory !== false) {
    history.pushState({ page: id }, '', '#' + id);
  }

  document.querySelectorAll('.page').forEach(function (p) {
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

  /* Load BTS videos on demand */
  if (id === 'projects') {
    document.querySelectorAll('#page-projects .bts-video').forEach(function (v) { v.load(); });
  }
};

window.addEventListener('popstate', function (e) {
  showPage(e.state && e.state.page ? e.state.page : 'home', false);
});

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
  var input = modal.querySelector('input');
  if (input) setTimeout(function () { input.focus(); }, 50);
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

window.openYT = function (videoId) {
  if (!videoId || videoId.startsWith('YOUTUBE_ID')) {
    alert('YouTube link not set yet.');
    return;
  }
  window.open('https://www.youtube.com/watch?v=' + videoId, '_blank');
};

/* ─────────────────────────────────────────
   4. LOADER
───────────────────────────────────────── */
window.addEventListener('load', function () {
  document.body.classList.add('loading');

  if (window.innerWidth > 768) {
    setTimeout(function () {
      var loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 1500);
  } else {
    var mLoader = document.getElementById('loader-mobile');
    setTimeout(function () {
      if (!mLoader) return;
      mLoader.style.transition  = 'opacity 0.5s ease';
      mLoader.style.opacity     = '0';
      mLoader.style.pointerEvents = 'none';
      setTimeout(function () {
        mLoader.style.display = 'none';
        document.body.classList.remove('loading');
      }, 500);
    }, 1500);
  }
});

/* ─────────────────────────────────────────
   5. NAV — SCROLL EFFECT + HAMBURGER
───────────────────────────────────────── */
function initNav() {
  var mainNav   = document.getElementById('main-nav');
  var hamburger = document.getElementById('nav-hamburger');
  var closeBtn  = document.getElementById('mobile-nav-close');
  var overlay   = document.getElementById('mobile-nav-overlay');

  /* Scroll class */
  if (mainNav) {
    window.addEventListener('scroll', function () {
      mainNav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* Mobile nav open / close */
  function openMobileNav() {
    if (!overlay) return;
    overlay.classList.add('active');
    overlay.style.pointerEvents = 'all';
    document.body.style.overflow = 'hidden';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }

  window.closeMobileNav = function () {
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  };

  if (hamburger) hamburger.addEventListener('click', openMobileNav);
  if (closeBtn)  closeBtn.addEventListener('click', closeMobileNav);
}

/* ─────────────────────────────────────────
   6. GALLERY MODAL
───────────────────────────────────────── */
function initGallery() {
  var modal    = document.getElementById('galleryModal');
  if (!modal) return;

  var modalImg = document.getElementById('galleryModalImg');
  var modalVid = document.getElementById('galleryModalVideo');
  var closeBtn = modal.querySelector('.gallery-close');
  var nextBtn  = modal.querySelector('.gallery-nav.right');
  var prevBtn  = modal.querySelector('.gallery-nav.left');

  var items   = [];
  var current = 0;

  function refreshItems() {
    var activePage = document.querySelector('.page.active');
    items = activePage ? Array.from(activePage.querySelectorAll('.gallery-item')) : [];
  }

  function openGallery() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeGallery() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (modalVid) { modalVid.pause(); modalVid.src = ''; modalVid.style.display = 'none'; }
    if (modalImg) { modalImg.src = ''; modalImg.style.display = 'none'; }
  }

  function showItem(index) {
    var el = items[index];
    if (!el) return;

    if (modalImg) modalImg.style.display = 'none';
    if (modalVid) { modalVid.style.display = 'none'; modalVid.pause(); }

    if (el.tagName === 'IMG') {
      if (modalImg) { modalImg.src = el.src; modalImg.alt = el.alt || ''; modalImg.style.display = 'block'; }
    } else if (el.tagName === 'VIDEO') {
      var src = el.querySelector('source') ? el.querySelector('source').src : el.src;
      if (modalVid) { modalVid.src = src; modalVid.style.display = 'block'; modalVid.play().catch(function () {}); }
    }
  }

  /* Wire all gallery items */
  document.querySelectorAll('.gallery-item').forEach(function (el) {
    el.style.cursor = 'pointer';
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', 'View in gallery');

    function trigger() {
      refreshItems();
      current = items.indexOf(el);
      if (current === -1) return;
      openGallery();
      showItem(current);
    }

    el.addEventListener('click', trigger);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); }
    });
  });

  /* Controls */
  if (closeBtn) closeBtn.addEventListener('click', closeGallery);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeGallery(); });

  if (nextBtn) nextBtn.addEventListener('click', function () { current = (current + 1) % items.length; showItem(current); });
  if (prevBtn) prevBtn.addEventListener('click', function () { current = (current - 1 + items.length) % items.length; showItem(current); });

  /* Keyboard nav */
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    if (e.key === 'ArrowLeft'  && prevBtn) prevBtn.click();
  });

  /* Touch swipe */
  var touchStartX = 0;
  modal.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  modal.addEventListener('touchend',   function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (dx < -50 && nextBtn) nextBtn.click();
    if (dx >  50 && prevBtn) prevBtn.click();
  }, { passive: true });

  /* BTS gallery override — navigates through btsVideos array */
  window._openBTSGallery = function (startIndex, btsVideos) {
    var current = startIndex;
    if (modalImg) modalImg.style.display = 'none';
    if (modalVid) { modalVid.src = btsVideos[current].src; modalVid.style.display = 'block'; modalVid.play().catch(function () {}); }
    openGallery();

    if (nextBtn) nextBtn.onclick = function () {
      current = (current + 1) % btsVideos.length;
      modalVid.src = btsVideos[current].src;
      modalVid.play().catch(function () {});
    };
    if (prevBtn) prevBtn.onclick = function () {
      current = (current - 1 + btsVideos.length) % btsVideos.length;
      modalVid.src = btsVideos[current].src;
      modalVid.play().catch(function () {});
    };
  };
}

/* ─────────────────────────────────────────
   7. CONTACT FORM
───────────────────────────────────────── */
function initContactForm() {
  var form      = document.getElementById('contactForm');
  if (!form) return;

  var submitBtn  = document.getElementById('cf-submit');
  var successBox = document.getElementById('form-success');
  var errorBox   = document.getElementById('form-error');
  var errorText  = document.getElementById('form-error-text');
  var supportSel = document.getElementById('cf-support');

  var EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* Rental mode: hide project-type field, change submit label */
  function updateFormMode() {
    if (!supportSel) return;
    var isRental = supportSel.value === 'Fleet / Equipment Rental' || supportSel.value === 'Transport Only';
    var typeGroup = document.getElementById('cf-type');
    if (typeGroup && typeGroup.closest('.form-group')) {
      typeGroup.closest('.form-group').style.display = isRental ? 'none' : '';
    }
    if (submitBtn && !submitBtn.disabled) {
      var t = TRANSLATIONS[currentLang];
      submitBtn.textContent = isRental ? (t.formSubmitRental || 'Request Rental Quote →') : (t.formSubmit || 'Send Request →');
    }
  }

  if (supportSel) { supportSel.addEventListener('change', updateFormMode); updateFormMode(); }

  /* Feedback helpers */
  function showSuccess() {
    if (successBox) { successBox.style.display = 'block'; successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    if (errorBox)   errorBox.style.display = 'none';
  }
  function showError(msg) {
    if (errorText)  errorText.textContent = msg;
    if (errorBox)   { errorBox.style.display = 'block'; errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    if (successBox) successBox.style.display = 'none';
  }
  function hideMessages() {
    if (successBox) successBox.style.display = 'none';
    if (errorBox)   errorBox.style.display = 'none';
  }

  function setLoading(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    var t = TRANSLATIONS[currentLang];
    if (on) {
      submitBtn.innerHTML = '<span class="btn-spinner"></span>' + (currentLang === 'ar' ? 'جارٍ الإرسال…' : 'Sending…');
    } else {
      updateFormMode();
    }
  }

  function validate(data) {
    var t   = TRANSLATIONS[currentLang];
    var isAr = currentLang === 'ar';
    if (!data.name)                return { field: 'cf-name',    msg: t.formLabelName + ' ' + (isAr ? 'مطلوب' : 'is required.') };
    if (!EMAIL_RX.test(data.email)) return { field: 'cf-email',  msg: isAr ? 'أدخل بريدًا إلكترونيًا صحيحًا.' : 'Please enter a valid email address.' };
    if (!data.supportType)          return { field: 'cf-support', msg: isAr ? 'يرجى اختيار نوع الدعم.' : 'Please select a support type.' };
    return null;
  }

  function highlightField(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.focus();
    _shakeElement(el);
    el.addEventListener('input', function clear() {
      el.style.borderColor = '';
      el.removeEventListener('input', clear);
    }, { once: true });
  }

  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    hideMessages();

    var data = {
      name:         getVal('cf-name'),
      company:      getVal('cf-company'),
      email:        getVal('cf-email'),
      supportType:  getVal('cf-support'),
      projectType:  getVal('cf-type'),
      shootDates:   getVal('cf-dates'),
      crewSize:     getVal('cf-crew'),
      projectBrief: getVal('cf-brief'),
    };
    data.priority = _calcPriority(data);

    var err = validate(data);
    if (err) { showError(err.msg); highlightField(err.field); return; }

    setLoading(true);
    try {
      var response = await fetch('https://applebox-backend.onrender.com/send-email', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      var result = await response.json();
      if (response.ok && result.success) {
        showSuccess();
        form.reset();
        updateFormMode();
      } else {
        var t = TRANSLATIONS[currentLang];
        showError((result.message || 'Error') + (currentLang === 'ar' ? ' أو تواصل عبر واتساب.' : ' Or reach us on WhatsApp.'));
      }
    } catch (fetchErr) {
      console.error('[AppleBox Form]', fetchErr);
      showError(currentLang === 'ar'
        ? 'تعذّر الاتصال. تواصل معنا مباشرةً عبر واتساب.'
        : 'Unable to connect. Please contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  });

  /* Clear field error highlight on input */
  form.querySelectorAll('input, select, textarea').forEach(function (el) {
    el.addEventListener('input',  function () { el.style.borderColor = ''; });
    el.addEventListener('change', function () { el.style.borderColor = ''; });
  });
}

/* ─────────────────────────────────────────
   8. BTS CAROUSEL
───────────────────────────────────────── */
var BTS_VIDEOS = [
  { src: 'pages/projectpage/bts/Adidas - Big Foot X Elephant Labs.mp4',               thumb: 'pages/projectpage/bts/thumbnails/12.png', label: 'JEDDAH',  client: 'ELEPHANT LAB', name: 'ADIDAS – BIG FOOT' },
  { src: 'pages/projectpage/bts/Adidas - Two Plus One.mp4',                           thumb: 'pages/projectpage/bts/thumbnails/13.png', label: 'RIYADH',  client: 'ADIDAS',       name: 'TWO PLUS ONE' },
  { src: 'pages/projectpage/bts/Asliyah - Alternative Everything.mp4',                thumb: 'pages/projectpage/bts/thumbnails/3.png',  label: 'JEDDAH',  client: 'ASLIYAH',      name: 'ALTERNATIVE EVERYTHING' },
  { src: 'pages/projectpage/bts/Flyadeal - Telfaz.mp4',                               thumb: 'pages/projectpage/bts/thumbnails/2.png',  label: 'JEDDAH',  client: 'TELFAZ',       name: 'FLYADEAL CAMPAIGN' },
  { src: 'pages/projectpage/bts/Maadan Snd - Purple Brain.mp4',                       thumb: 'pages/projectpage/bts/thumbnails/6.png',  label: 'RIYADH',  client: 'PURPLE BRAIN', name: 'MAADAN SAUDI NATIONAL DAY' },
  { src: 'pages/projectpage/bts/Keeta - Digitech.mp4',                                thumb: 'pages/projectpage/bts/thumbnails/7.png',  label: 'JEDDAH',  client: 'DIGITECH',     name: 'KEETA CAMPAIGN' },
  { src: 'pages/projectpage/bts/National Cybersecurity Authority - Salham.mp4',        thumb: 'pages/projectpage/bts/thumbnails/8.png',  label: 'RIYADH',  client: 'SALHAM',       name: 'NATIONAL CYBERSECURITY AUTHORITY' },
  { src: 'pages/projectpage/bts/Diriyah Gate Development Authrity - Two Tales.mp4',   thumb: 'pages/projectpage/bts/thumbnails/10.png', label: 'RIYADH',  client: 'TWO TALES',    name: 'DIRIYAH GATE DEVELOPMENT AUTHORITY' },
  { src: 'pages/projectpage/bts/Tres Content - Toyota Ad Shoot.mp4',                  thumb: 'pages/projectpage/bts/thumbnails/1.png',  label: 'JEDDAH',  client: 'TRÈS CONTENT', name: 'TOYOTA AD SHOOT' },
  { src: 'pages/projectpage/bts/Two Tales - Toyota Ad.mp4',                           thumb: 'pages/projectpage/bts/thumbnails/11.png', label: 'DAMMAM',  client: 'TWO TALES',    name: 'TOYOTA AD SHOOT' },
  { src: 'pages/projectpage/bts/Dna Studio - Ministry Of National Guard.mp4',         thumb: 'pages/projectpage/bts/thumbnails/4.png',  label: 'RIYADH',  client: 'DNA STUDIO',   name: 'MINISTRY OF NATIONAL GUARD' },
  { src: 'pages/projectpage/bts/Scar Studio - Nescafe.mp4',                           thumb: 'pages/projectpage/bts/thumbnails/5.png',  label: 'RIYADH',  client: 'SCAR STUDIO',  name: 'NESCAFE' },
  { src: 'pages/projectpage/bts/Clandestino - Goat Shoot , Riyadh.mp4',               thumb: 'pages/projectpage/bts/thumbnails/9.png',  label: 'RIYADH',  client: 'CLANDESTINO',  name: 'VISIT SAUDI' },
];

function buildBTSTrack() {
  var track = document.getElementById('bts-track');
  if (!track) return;

  /* Duplicate items for seamless loop */
  var allItems = BTS_VIDEOS.concat(BTS_VIDEOS);

  allItems.forEach(function (item, index) {
    var realIndex = index % BTS_VIDEOS.length;

    var card = document.createElement('div');
    card.className = 'bts-card';
    card.innerHTML =
      '<div class="bts-thumb">' +
        '<video muted loop playsinline preload="none" class="bts-video"' +
          (item.thumb ? ' poster="' + item.thumb + '"' : '') + '>' +
          '<source src="' + item.src + '" type="video/mp4">' +
        '</video>' +
        '<div class="bts-overlay"></div>' +
        '<div class="bts-label">' + item.label + '</div>' +
      '</div>' +
      '<div class="bts-info">' +
        '<div class="bts-client">' + item.client + '</div>' +
        '<div class="bts-name">'   + item.name   + '</div>' +
      '</div>';

    var video = card.querySelector('.bts-video');
    var isPlaying = false;

    card.addEventListener('mouseenter', function () {
      if (window.matchMedia('(hover: hover)').matches) {
        video.play().catch(function () {});
        isPlaying = true;
      }
    });

    card.addEventListener('mouseleave', function () {
      if (window.matchMedia('(hover: hover)').matches) {
        video.pause();
        video.load();
        isPlaying = false;
      }
    });

    card.addEventListener('click', function () {
      if (!window.matchMedia('(hover: hover)').matches) {
        if (!isPlaying) {
          video.play().catch(function () {});
          isPlaying = true;
        } else {
          video.pause();
          video.load();
          isPlaying = false;
          if (window._openBTSGallery) window._openBTSGallery(realIndex, BTS_VIDEOS);
        }
      } else {
        if (window._openBTSGallery) window._openBTSGallery(realIndex, BTS_VIDEOS);
      }
    });

    track.appendChild(card);
  });
}

/* ─────────────────────────────────────────
   9. SCROLL REVEAL
───────────────────────────────────────── */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll(
    '.why-item, .service-card, .pillar-card, .audience-card, .process-step, .stat-item, .fleet-section'
  ).forEach(function (el) {
    el.classList.add('reveal');
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────
   10. LAZY LOAD VIDEOS
───────────────────────────────────────── */
function initLazyVideos() {
  if (!('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;

      if (el.tagName === 'IMG' && el.dataset.src) {
        el.src = el.dataset.src;
        el.removeAttribute('data-src');
      }
      if (el.tagName === 'VIDEO') {
        el.querySelectorAll('source[data-src]').forEach(function (s) {
          s.src = s.dataset.src;
          s.removeAttribute('data-src');
        });
        el.load();
      }
      obs.unobserve(el);
    });
  }, { rootMargin: '200px 0px' });

  document.querySelectorAll('video[preload="none"]').forEach(function (v) { obs.observe(v); });
  document.querySelectorAll('img.gallery-item').forEach(function (el) { obs.observe(el); });
}

/* ─────────────────────────────────────────
   11. COUNTER ANIMATION
───────────────────────────────────────── */
function animateCounter(el, target, duration) {
  if (!el) return;
  var start = 0;
  var step  = target / (duration / 16);
  var timer = setInterval(function () {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start);
  }, 16);
}

function initCounters() {
  var statsBar = document.querySelector('.stats-bar');
  if (!statsBar || !('IntersectionObserver' in window)) return;

  var triggered = false;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        animateCounter(document.querySelector('.stat-item:nth-child(1) .stat-count'), 7,   1500);
        animateCounter(document.querySelector('.stat-item:nth-child(2) .stat-count'), 10,  1500);
        animateCounter(document.querySelector('.stat-item:nth-child(3) .stat-count'), 600, 2000);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  obs.observe(statsBar);
}

/* ─────────────────────────────────────────
   12. UTILITIES
───────────────────────────────────────── */
function _shakeElement(el) {
  if (!el) return;
  el.style.borderColor = '#e05252';
  var offsets = [7, -7, 5, -5, 3, -3, 0];
  var i  = 0;
  var iv = setInterval(function () {
    el.style.transform = 'translateX(' + (offsets[i] || 0) + 'px)';
    i++;
    if (i >= offsets.length) { clearInterval(iv); el.style.transform = ''; }
  }, 45);
}

function _calcPriority(data) {
  var crew      = parseInt((data.crewSize || '').replace(/\D/g, ''), 10) || 0;
  var bigTypes  = ['Feature Film', 'International Production', 'Drama Series'];
  var isFullProd = data.supportType === 'Full Production Support' || data.supportType === 'Unit Production';
  var isBigType  = bigTypes.indexOf(data.projectType) !== -1;
  if (crew >= 50 || (isBigType && isFullProd)) return '🔴 HIGH PRIORITY';
  if (crew >= 20 || isBigType || isFullProd)   return '🟡 STANDARD';
  return '🟢 QUICK RESPONSE';
}

/* ─────────────────────────────────────────
   DOM READY — INIT ALL MODULES
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* Mark inactive pages as hidden */
  document.querySelectorAll('.page:not(.active)').forEach(function (p) {
    p.setAttribute('aria-hidden', 'true');
  });

  /* Language switcher */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { switchLanguage(btn.getAttribute('data-lang')); });
  });

  /* Restore saved language */
  var saved = '';
  try { saved = localStorage.getItem('ab_lang') || ''; } catch (e) {}
  if (saved === 'ar') {
    switchLanguage('ar');
  } else {
    var enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    if (enBtn) enBtn.classList.add('active');
  }

  /* Global escape key */
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
    var mn = document.getElementById('mobile-nav-overlay');
    if (mn && mn.classList.contains('active')) closeMobileNav();
  });

  /* Init all modules */
  initNav();
  initGallery();
  initContactForm();
  buildBTSTrack();
  initScrollReveal();
  initLazyVideos();
  initCounters();
});
