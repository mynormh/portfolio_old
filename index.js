const navButton = document.querySelector("button[aria-expanded]");
      function toggleNav({ target }) {
        const expanded =
          target.getAttribute("aria-expanded") === "true" ? true : false;
        navButton.setAttribute("aria-expanded", !expanded);
      }
      navButton.addEventListener("click", toggleNav);