(function () {
  "use strict";

  // Mobile navigation toggle
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Dropdown menu buttons in navigation
  document.querySelectorAll(".nav-dd").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var expanded = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".nav-dd").forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
      });
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });

  // Close dropdowns on document click
  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-dd").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".nav-dd").forEach(function (btn) {
        btn.setAttribute("aria-expanded", "false");
      });
    }
  });

  // Year chips & cards: Inline under each milestone on mobile, hover popup on tablet/desktop
  function syncYearCards() {
    var isMobile = window.innerWidth <= 767;
    document.querySelectorAll(".year").forEach(function (yearEl) {
      var chip = yearEl.querySelector(".year-chip");
      if (!chip) return;
      var id = chip.getAttribute("data-dialog");
      var card = id ? document.getElementById(id) : null;
      if (!card) return;

      if (isMobile) {
        // Show inline directly inside the year item below photo
        card.hidden = false;
        if (card.parentElement !== yearEl) {
          yearEl.appendChild(card);
        }
      } else {
        // Return to body for desktop absolute positioning & hover interaction
        card.hidden = true;
        if (card.parentElement !== document.body) {
          document.body.appendChild(card);
        }
      }
    });
  }

  // Desktop / Tablet hover interactions
  document.querySelectorAll(".year-chip").forEach(function (chip) {
    var id = chip.getAttribute("data-dialog");
    var card = id ? document.getElementById(id) : null;
    if (!card) return;

    var hideTimer;

    chip.addEventListener("mouseenter", function () {
      if (window.innerWidth > 767) {
        clearTimeout(hideTimer);
        card.hidden = false;
      }
    });

    card.addEventListener("mouseenter", function () {
      if (window.innerWidth > 767) {
        clearTimeout(hideTimer);
        card.hidden = false;
      }
    });

    function maybeHide(e) {
      if (window.innerWidth > 767) {
        var related = e.relatedTarget;
        if (related === chip || chip.contains(related) || related === card || card.contains(related)) {
          return;
        }
        hideTimer = setTimeout(function () {
          card.hidden = true;
        }, 120);
      }
    }
    chip.addEventListener("mouseleave", maybeHide);
    card.addEventListener("mouseleave", maybeHide);
  });

  window.addEventListener("resize", syncYearCards);
  syncYearCards();

  // Dynamic slideshow for "How did MG start" founders card
  var founderSlides = document.querySelectorAll(".photo-founders .founder-slide");
  if (founderSlides.length > 1) {
    var slideIdx = 0;
    setInterval(function () {
      founderSlides[slideIdx].classList.remove("is-active");
      slideIdx = (slideIdx + 1) % founderSlides.length;
      founderSlides[slideIdx].classList.add("is-active");
    }, 3500);
  }

  // Section tabs interaction & smooth centering on mobile
  var sectionTabs = document.querySelectorAll(".section-tab");
  sectionTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      sectionTabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      if (window.innerWidth <= 767) {
        tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  });

})();
