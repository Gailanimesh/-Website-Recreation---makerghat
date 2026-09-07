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

  // Backdrop element for mobile/tablet year card modal
  var backdrop = document.createElement("div");
  backdrop.className = "year-card-backdrop";
  backdrop.hidden = true;
  document.body.appendChild(backdrop);

  function closeAllCards() {
    document.querySelectorAll(".year-card").forEach(function (c) {
      c.hidden = true;
    });
    backdrop.hidden = true;
  }

  backdrop.addEventListener("click", closeAllCards);

  // Year chips — show inline card on hover for desktop, toggle modal on touch/click for mobile/tablet
  document.querySelectorAll(".year-chip").forEach(function (chip) {
    var id = chip.getAttribute("data-dialog");
    var card = id ? document.getElementById(id) : null;
    if (!card) return;

    // Add close button to mobile cards if not present
    if (!card.querySelector(".year-card-close")) {
      var closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "year-card-close";
      closeBtn.setAttribute("aria-label", "Close");
      closeBtn.innerHTML = "&times;";
      closeBtn.style.cssText = "position:absolute;top:10px;right:14px;background:none;border:none;font-size:24px;line-height:1;color:#362c5f;cursor:pointer;padding:4px 8px;";
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllCards();
      });
      card.appendChild(closeBtn);
    }

    var hideTimer;

    // Desktop hover
    chip.addEventListener("mouseenter", function () {
      if (window.innerWidth > 1099) {
        clearTimeout(hideTimer);
        card.hidden = false;
      }
    });

    card.addEventListener("mouseenter", function () {
      if (window.innerWidth > 1099) {
        clearTimeout(hideTimer);
        card.hidden = false;
      }
    });

    function maybeHide(e) {
      if (window.innerWidth > 1099) {
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

    // Mobile / touch click toggle
    chip.addEventListener("click", function (e) {
      e.stopPropagation();
      if (window.innerWidth <= 1099) {
        if (card.hidden) {
          closeAllCards();
          card.hidden = false;
          backdrop.hidden = false;
        } else {
          closeAllCards();
        }
      }
    });
  });

  // Global escape key to close modals
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllCards();
    }
  });

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

})();
