/* ---------- Carte bilingue ---------- */
const MENU = `#Pizza
Pizza Margarita|45
Pizza Quatre Fromage|55
Pizza Peppéroni|55
Pizza Poulet|60
Pizza Bolonaise|60
Pizza Saumon fumé|70
Pizza Quatre Saisons|70
Pizza Fruit de Mer|80
#Tacos
Tacos Poulet|50
Tacos Viande hachée|50
Tacos Cordon Bleu|55
Tacos Américain|55
Tacos Mixe|55
#Burgers
Sheese Burger|50
Classique Smash Burger|55
Chicken Burger|55
Fish Burger|55
Hamburger Américain|60
Burger Special One|60
#Sandwichs
Sandwish Espagnole|45
Sandwish Marocain|45
La Mitraillette Belge|45
Burrito Mexicain|50
Sandwish Américain|55
#Plats & pâtes
##Les plats
Brochettes Mixe Grillée|70
Cordon Bleu|80
Emincé de Poulet|80
Filet de Saumon Grillée|100
##Pâtes
Spaghetti Sauce Tomate|50
Spaghetti Bolonaise|60
Pasta Carbonara|65
Tagliatelle Alfredo|70
Linguine Fruit de Mer|80
Spaghetti Saumon|90
#Entrées
##Entrées fraîches
Salade Quinoa|50
Salade Russe|50
Salade César|60
Salade Pêcheur|70
##Entrées chaudes
Patatas Bravas|50
Croquettes Fruit de Mer|50
Soupe de Poissons|50
Tortilla Espagnol|55
Gambas à l'Ail|90
#Desserts
Tarte au Citron|25
Cheese Cake|25
Mousse au Chocolat Oreo|25
Tiramisu|30
Banofee Pie|30
Salade de Fruit|30
#Boissons
##Jus & smoothies
Jus de Citron|20
Jus d'Orange|20
Jus d'Orange et Banane|25
Jus d'Orange et Mangue|30
Jus d'Orange et Ananas|30
Tropical|30
Fruit Rouge|30
##Boissons gazeuses
Coca Cola|10
Fanta Citron|10
Hawaï|10
Pomme|10
Coca Zéro|10
##Eau
Sidi Ali 33cl|7
Sidi Ali 75cl|25`;

const $ = (s) => document.querySelector(s); const $$ = (s) => [...document.querySelectorAll(s)];
const dateInput = $('#rDate');
const timeInput = $('#rTime');

const TEXT = {
  fr: {
    pageTitle: 'Special One — Restaurant à Tanger', navLabel: 'Navigation principale', mobileNavLabel: 'Navigation mobile',
    menuNav: 'Menu', galleryNav: 'Galerie', philosophyNav: 'Philosophie', reviewsNav: 'Avis', contactNav: 'Contact',
    reserveShort: 'Réserver', reserveTable: 'Réserver une table', openMenu: 'Ouvrir le menu', close: 'Fermer',
    heroText: 'Pizzas, tacos, burgers, pâtes et cocktails frais, préparés minute à Tanger. Une cuisine généreuse et un service rapide.',
    seeMenu: 'Voir le menu', findUs: 'Nous trouver', customerReviews: 'Avis clients', menuTitle: 'La carte',
    pricesNote: 'Tous les prix sont en dirhams marocains (DH).', galleryTitle: 'Galerie',
    galleryLead: "Nos cocktails maison et nos plats, tels qu'ils arrivent à table.", philosophyTitle: 'Notre philosophie',
    philosophyLead: 'Trois engagements que nous tenons à chaque service.', freshTitle: 'Produits frais',
    freshText: 'Des ingrédients de qualité, choisis avec soin et cuisinés le jour même.', fastTitle: 'Service rapide',
    fastText: "Votre commande arrive chaude et à l'heure, sur place comme en livraison.", easyBookingTitle: 'Réservation simple',
    easyBookingText: 'Un appel ou un message WhatsApp suffit pour garder votre table.',
    craftTitle: 'Le savoir-faire, avec passion',
    craftText: 'Depuis 2025, notre équipe affine ses recettes : pâte à pizza, sauces maison, cuissons maîtrisées. Chaque assiette est préparée avec le même soin.',
    reviewsTitle: 'Avis clients', reviewsLead: 'Ce que disent nos invités.', previousPhoto: 'Photo précédente', nextPhoto: 'Photo suivante',
    previousReview: 'Avis précédent', nextReview: 'Avis suivant', restaurantSince: 'Restaurant · Tanger · depuis 2025',
    address: 'Rue Hamri Aamri, Tanger 90100', openMaps: 'Ouvrir dans Google Maps', hoursTitle: 'Horaires',
    hours: 'Tous les jours, 12h00 – 23h00', legal: '© 2025 Special One Restaurant, Tanger. Tous droits réservés. Prix en DH, TTC, susceptibles de changer.',
    bookingPrompt: 'Envoyez votre demande par WhatsApp ou appelez-nous.', yourName: 'Votre nom', date: 'Date', time: 'Heure',
    guestCount: 'Nombre de personnes', sendWhatsapp: 'Envoyer sur WhatsApp', callUs: 'Appeler 06 67 41 40 91',
    darkMode: 'Sombre', lightMode: 'Clair', validation: "Renseignez le nom, la date, l'heure et le nombre de personnes.",
    whatsappMessage: (name, date, time, guests) => `Bonjour, je souhaite réserver une table au nom de ${name} le ${date} à ${time} pour ${guests} personne(s).`,
    slideLabel: (number) => `Aller à la diapositive ${number}`,
  },
  ar: {
    pageTitle: 'سبيشال وان — مطعم في طنجة', navLabel: 'التنقل الرئيسي', mobileNavLabel: 'قائمة التنقل',
    menuNav: 'القائمة', galleryNav: 'معرض الصور', philosophyNav: 'فلسفتنا', reviewsNav: 'آراء الزبائن', contactNav: 'اتصل بنا',
    reserveShort: 'احجز', reserveTable: 'احجز طاولة', openMenu: 'فتح القائمة', close: 'إغلاق',
    heroText: 'بيتزا وتاكوس وبرغر ومعكرونة ومشروبات طازجة تُحضّر فوراً في طنجة. أطباق سخية وخدمة سريعة.',
    seeMenu: 'اكتشف القائمة', findUs: 'موقعنا', customerReviews: 'آراء الزبائن', menuTitle: 'قائمة الطعام',
    pricesNote: 'جميع الأسعار بالدرهم المغربي (DH).', galleryTitle: 'معرض الصور',
    galleryLead: 'مشروباتنا المنزلية وأطباقنا كما تُقدّم على المائدة.', philosophyTitle: 'فلسفتنا',
    philosophyLead: 'ثلاثة التزامات نحرص عليها في كل خدمة.', freshTitle: 'مكونات طازجة',
    freshText: 'مكونات عالية الجودة نختارها بعناية ونحضّرها في اليوم نفسه.', fastTitle: 'خدمة سريعة',
    fastText: 'يصل طلبكم ساخناً وفي وقته، في المطعم أو عبر التوصيل.', easyBookingTitle: 'حجز سهل',
    easyBookingText: 'مكالمة أو رسالة واتساب تكفي للاحتفاظ بطاولتكم.',
    craftTitle: 'خبرة تُحضّر بشغف',
    craftText: 'منذ 2025، يطوّر فريقنا وصفاته: عجينة البيتزا، والصلصات المنزلية، وطرق الطهي المتقنة. نحضّر كل طبق بالعناية نفسها.',
    reviewsTitle: 'آراء الزبائن', reviewsLead: 'تجارب ضيوفنا.', previousPhoto: 'الصورة السابقة', nextPhoto: 'الصورة التالية',
    previousReview: 'الرأي السابق', nextReview: 'الرأي التالي', restaurantSince: 'مطعم · طنجة · منذ 2025',
    address: 'شارع حمري أعمري، طنجة 90100', openMaps: 'افتح في خرائط Google', hoursTitle: 'أوقات العمل',
    hours: 'كل يوم، من 12:00 إلى 23:00', legal: '© 2025 مطعم سبيشال وان، طنجة. جميع الحقوق محفوظة. الأسعار بالدرهم شاملة الضريبة وقابلة للتغيير.',
    bookingPrompt: 'أرسلوا طلبكم عبر واتساب أو اتصلوا بنا.', yourName: 'اسمكم', date: 'التاريخ', time: 'الوقت',
    guestCount: 'عدد الأشخاص', sendWhatsapp: 'أرسل عبر واتساب', callUs: 'اتصلوا بنا: 06 67 41 40 91',
    darkMode: 'داكن', lightMode: 'فاتح', validation: 'يرجى إدخال الاسم والتاريخ والوقت وعدد الأشخاص.',
    whatsappMessage: (name, date, time, guests) => `مرحباً، أود حجز طاولة باسم ${name} بتاريخ ${date} على الساعة ${time} لعدد ${guests} أشخاص.`,
    slideLabel: (number) => `انتقل إلى الشريحة ${number}`,
  },
};

const MENU_AR = {
  'Pizza': 'بيتزا', 'Tacos': 'تاكوس', 'Burgers': 'برغر', 'Sandwichs': 'سندويشات', 'Plats & pâtes': 'أطباق ومعكرونة',
  'Entrées': 'مقبلات', 'Desserts': 'حلويات', 'Boissons': 'مشروبات', 'Les plats': 'الأطباق', 'Pâtes': 'المعكرونة',
  'Entrées fraîches': 'مقبلات باردة', 'Entrées chaudes': 'مقبلات ساخنة', 'Jus & smoothies': 'عصائر وسموذي',
  'Boissons gazeuses': 'مشروبات غازية', 'Eau': 'ماء',
  'Pizza Margarita': 'بيتزا مارغريتا', 'Pizza Quatre Fromage': 'بيتزا أربعة أجبان', 'Pizza Peppéroni': 'بيتزا بيبروني',
  'Pizza Poulet': 'بيتزا الدجاج', 'Pizza Bolonaise': 'بيتزا بولونيز', 'Pizza Saumon fumé': 'بيتزا السلمون المدخن',
  'Pizza Quatre Saisons': 'بيتزا الفصول الأربعة', 'Pizza Fruit de Mer': 'بيتزا المأكولات البحرية',
  'Tacos Poulet': 'تاكوس الدجاج', 'Tacos Viande hachée': 'تاكوس اللحم المفروم', 'Tacos Cordon Bleu': 'تاكوس كوردون بلو',
  'Tacos Américain': 'تاكوس أمريكي', 'Tacos Mixe': 'تاكوس مشكل', 'Sheese Burger': 'برغر بالجبن',
  'Classique Smash Burger': 'سمّاش برغر كلاسيكي', 'Chicken Burger': 'برغر الدجاج', 'Fish Burger': 'برغر السمك',
  'Hamburger Américain': 'هامبرغر أمريكي', 'Burger Special One': 'برغر سبيشال وان',
  'Sandwish Espagnole': 'سندويش إسباني', 'Sandwish Marocain': 'سندويش مغربي', 'La Mitraillette Belge': 'ميتراييت بلجيكية',
  'Burrito Mexicain': 'بوريتو مكسيكي', 'Sandwish Américain': 'سندويش أمريكي', 'Brochettes Mixe Grillée': 'مشاوي مشكلة',
  'Cordon Bleu': 'كوردون بلو', 'Emincé de Poulet': 'شرائح الدجاج', 'Filet de Saumon Grillée': 'فيليه سلمون مشوي',
  'Spaghetti Sauce Tomate': 'سباغيتي بصلصة الطماطم', 'Spaghetti Bolonaise': 'سباغيتي بولونيز', 'Pasta Carbonara': 'باستا كاربونارا',
  'Tagliatelle Alfredo': 'تالياتيلي ألفريدو', 'Linguine Fruit de Mer': 'لينغويني بالمأكولات البحرية', 'Spaghetti Saumon': 'سباغيتي بالسلمون',
  'Salade Quinoa': 'سلطة الكينوا', 'Salade Russe': 'سلطة روسية', 'Salade César': 'سلطة سيزر', 'Salade Pêcheur': 'سلطة الصياد',
  'Patatas Bravas': 'باتاتاس برافاس', 'Croquettes Fruit de Mer': 'كروكيت المأكولات البحرية', 'Soupe de Poissons': 'حساء السمك',
  'Tortilla Espagnol': 'تورتيلا إسبانية', 'Gambas à l\'Ail': 'روبيان بالثوم', 'Tarte au Citron': 'تارت الليمون',
  'Cheese Cake': 'تشيز كيك', 'Mousse au Chocolat Oreo': 'موس الشوكولاتة وأوريو', 'Tiramisu': 'تيراميسو', 'Banofee Pie': 'فطيرة البانوفّي',
  'Salade de Fruit': 'سلطة فواكه', 'Jus de Citron': 'عصير الليمون', 'Jus d\'Orange': 'عصير البرتقال',
  'Jus d\'Orange et Banane': 'عصير البرتقال والموز', 'Jus d\'Orange et Mangue': 'عصير البرتقال والمانجو',
  'Jus d\'Orange et Ananas': 'عصير البرتقال والأناناس', 'Tropical': 'تروبيكال', 'Fruit Rouge': 'فواكه حمراء',
  'Coca Cola': 'كوكاكولا', 'Fanta Citron': 'فانتا ليمون', 'Hawaï': 'هاواي', 'Pomme': 'تفاح', 'Coca Zéro': 'كوكاكولا زيرو',
  'Sidi Ali 33cl': 'سيدي علي 33 سل', 'Sidi Ali 75cl': 'سيدي علي 75 سل',
};

let currentLanguage = localStorage.getItem('specialone-language') || 'fr';
let currentTheme = localStorage.getItem('specialone-theme') || 'dark';

function renderMenu() {
  const html = [];
  MENU.split('\n').forEach((line) => {
    if (line.startsWith('##')) {
      const label = line.slice(2);
      html.push(`<h4>${currentLanguage === 'ar' ? MENU_AR[label] || label : label}</h4>`);
    } else if (line.startsWith('#')) {
      if (html.length) html.push('</section>');
      const label = line.slice(1);
      html.push(`<section class="cat"><h3>${currentLanguage === 'ar' ? MENU_AR[label] || label : label}</h3>`);
    } else {
      const [name, price] = line.split('|');
      html.push(`<div class="dish"><b>${currentLanguage === 'ar' ? MENU_AR[name] || name : name}</b><span class="dots-line"></span><i>${price} DH</i></div>`);
    }
  });
  html.push('</section>');
  $('#menuCard').innerHTML = html.join('');
}

function applyLanguage(language) {
  currentLanguage = language === 'ar' ? 'ar' : 'fr';
  const strings = TEXT[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.title = strings.pageTitle;
  $$('[data-i18n]').forEach((element) => { element.textContent = strings[element.dataset.i18n]; });
  $$('[data-i18n-placeholder]').forEach((element) => { element.placeholder = strings[element.dataset.i18nPlaceholder]; });
  $$('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', strings[element.dataset.i18nAria]); });
  $$('[data-language]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage)));
  $$('.dots button').forEach((button, index) => { button.setAttribute('aria-label', strings.slideLabel(index + 1)); });
  $('#rErr').textContent = '';
  renderMenu();
  refreshDatePlaceholders();
  localStorage.setItem('specialone-language', currentLanguage);
}

function applyTheme(theme) {
  currentTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = currentTheme;
  $$('[data-theme]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.theme === currentTheme)));
  localStorage.setItem('specialone-theme', currentTheme);
}

renderMenu();
applyLanguage(currentLanguage);
applyTheme(currentTheme);
$$('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
$$('[data-theme]').forEach((button) => button.addEventListener('click', () => applyTheme(button.dataset.theme)));

const preloader = $('#preloader');
let countdown = 3;
const loaderTimer = setInterval(() => {
  countdown -= 1;
  $('#loaderCount').textContent = countdown > 0 ? countdown : '';
  if (countdown <= 0) {
    clearInterval(loaderTimer);
    preloader.classList.add('done');
    setTimeout(() => preloader.remove(), 700);
  }
}, 1000);

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
$$('#menu h2, #menu .lead, #menu .cat, #galerie h2, #galerie .lead, #philosophie h2, #philosophie .lead, #philosophie .value, #avis h2, #avis .lead, #avis .review')
  .forEach((element, index) => {
    element.classList.add('reveal', index % 2 ? 'from-right' : 'from-left');
    revealObserver.observe(element);
  });

function refreshDatePlaceholders() {
  [dateInput, timeInput].forEach((input) => {
    if (input) input.closest('.date-field').classList.toggle('has-value', Boolean(input.value));
  });
}
[dateInput, timeInput].forEach((input) => {
  input.addEventListener('input', refreshDatePlaceholders);
  input.addEventListener('change', refreshDatePlaceholders);
});

/* ---------- Carrousel générique ---------- */
function carousel({ track, prev, next, dots, perView, autoplay }) {
  const el = $(track), n = el.children.length, dotsEl =$(dots);
  let i = 0, timer;
  const max = () => n - perView();
  const go = (k) => {
    i = k > max() ? 0 : k < 0 ? max() : k;
    el.style.transform = `translateX(${-i * (100 / perView())}%)`;
    [...dotsEl.children].forEach((d, j) => d.classList.toggle('on', j === i));
  };
  const restart = () => {
    clearInterval(timer);
    if (autoplay && !matchMedia('(prefers-reduced-motion:reduce)').matches)
      timer = setInterval(() => go(i + 1), autoplay);
  };
  const build = () => {
    dotsEl.innerHTML = '';
    for (let k = 0; k <= max(); k++) {
      const d = document.createElement('button');
      d.setAttribute('aria-label', TEXT[currentLanguage].slideLabel(k + 1));
      d.onclick = () => { go(k); restart(); };
      dotsEl.append(d);
    }
    go(Math.min(i, max()));
  };
  $(prev).onclick = () => { go(i - 1); restart(); };$(next).onclick = () => { go(i + 1); restart(); };
  let sx = null;
  el.addEventListener('touchstart', (e) => (sx = e.touches[0].clientX), { passive: true });
  el.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const d = e.changedTouches[0].clientX - sx;
    if (Math.abs(d) > 40) { go(i + (d < 0 ? 1 : -1)); restart(); }
    sx = null;
  });
  addEventListener('resize', build);
  build(); restart();
}

carousel({
  track: '#galTrack', prev: '#galPrev', next: '#galNext', dots: '#galDots',
  perView: () => (innerWidth > 900 ? 3 : innerWidth > 560 ? 2 : 1), autoplay: 3500,
});
carousel({
  track: '#revTrack', prev: '#revPrev', next: '#revNext', dots: '#revDots',
  perView: () => 1, autoplay: 6000,
});

/* ---------- Menu mobile ---------- */
const burger = $('#burger'), mobile = $('#mobile'); const closeMobile = () => { mobile.classList.remove('on'); burger.classList.remove('on'); burger.setAttribute('aria-expanded', 'false'); }; burger.onclick = () => {   const on = mobile.classList.toggle('on');   burger.classList.toggle('on', on);   burger.setAttribute('aria-expanded', on); }; $$('#mobile a').forEach((a) => (a.onclick = closeMobile));

/* ---------- Réservation ---------- */
const WHATSAPP = '212667414091';
const modal = $('#modal');
const openModal = () => { closeMobile(); modal.classList.add('on'); $('#rName').focus(); }; const closeModal = () => modal.classList.remove('on'); $$('[data-res]').forEach((b) => (b.onclick = openModal));$('#modalClose').onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

if (dateInput) {
  dateInput.addEventListener('click', () => {
    if (typeof dateInput.showPicker === 'function') {
      dateInput.showPicker();
    }
  });
}

if (timeInput) {
  timeInput.addEventListener('click', () => {
    if (typeof timeInput.showPicker === 'function') {
      timeInput.showPicker();
    }
  });
}

$('#rSend').onclick = () => {
  const name = $('#rName').value.trim(), date = $('#rDate').value,
        time = $('#rTime').value, guests = $('#rGuests').value;
  if (!name || !date || !time || !guests) {
    $('#rErr').textContent = TEXT[currentLanguage].validation;
    return;
  }
  $('#rErr').textContent = '';
  const msg = TEXT[currentLanguage].whatsappMessage(name, date, time, guests);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  closeModal();
};