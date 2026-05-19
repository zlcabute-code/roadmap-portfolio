/* ============================================================
   CyberStart — script.js
   Handles: mobile menu, active nav links, roadmap accordion
   ============================================================ */

/* -------------------------------------------------------
   1. MOBILE MENU TOGGLE
   Adds / removes .open on the menu and .active on the button
   ------------------------------------------------------- */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');   // animates the 3 lines → X
    mobileMenu.classList.toggle('open');    // slides the menu down
  });

  // Close the mobile menu if the user clicks a link inside it
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

/* -------------------------------------------------------
   2. ACTIVE NAV LINK HIGHLIGHTING
   Compares the current filename to each link's href
   and adds .active so the right link is highlighted.
   ------------------------------------------------------- */
var currentFile = window.location.pathname.split('/').pop();

// Default to index.html when opening the folder directly
if (currentFile === '' || currentFile === undefined) {
  currentFile = 'index.html';
}

// Update both desktop (.nav-links a) and mobile (.mobile-menu a)
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
  if (link.getAttribute('href') === currentFile) {
    link.classList.add('active');
  }
});

/* -------------------------------------------------------
   3. ROADMAP ACCORDION
   Clicking a roadmap card header toggles it open/closed.
   Only one card can be open at a time (accordion behavior).
   ------------------------------------------------------- */
var roadmapCards = document.querySelectorAll('.rm-card');

roadmapCards.forEach(function (card) {
  var header = card.querySelector('.rm-header');

  if (!header) return; // skip if no header (safety check)

  header.addEventListener('click', function () {
    var isAlreadyOpen = card.classList.contains('is-open');

    // Close every card first
    roadmapCards.forEach(function (c) {
      c.classList.remove('is-open');
    });

    // If the clicked card was closed, open it now
    if (!isAlreadyOpen) {
      card.classList.add('is-open');
    }
  });
});

// Open the first roadmap card automatically so users see content right away
var firstCard = document.querySelector('.rm-card');
if (firstCard) {
  firstCard.classList.add('is-open');
}
