/* ---------- Menu ---------- */
// "#" = catégorie, "##" = sous-groupe, "Nom|Prix" = plat. Modifiez ici pour mettre à jour la carte.
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

(function renderMenu() {
  const html = [];
  MENU.split('\n').forEach((line) => {
    if (line.startsWith('##')) html.push(`<h4>${line.slice(2)}</h4>`);
    else if (line.startsWith('#')) {
      if (html.length) html.push('</section>');
      html.push(`<section class="cat"><h3>${line.slice(1)}</h3>`);
    } else {
      const [name, price] = line.split('|');
      html.push(`<div class="dish"><b>${name}</b><span class="dots-line"></span><i>${price} DH</i></div>`);
    }
  });
  html.push('</section>');
  $('#menuCard').innerHTML = html.join('');
})();

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
      d.setAttribute('aria-label', 'Aller à la diapositive ' + (k + 1));
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

// تفعيل فتح التقويم والساعة تلقائياً عند النقر على الحقول في الحواسيب والهواتف
const dateInput = $('#rDate');
const timeInput = $('#rTime');

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
    $('#rErr').textContent = 'Renseignez le nom, la date, l\'heure et le nombre de personnes.';
    return;
  }
  $('#rErr').textContent = '';
  const msg = `Bonjour, je souhaite réserver une table au nom de ${name} le ${date} à ${time} pour ${guests} personne(s).`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  closeModal();
};