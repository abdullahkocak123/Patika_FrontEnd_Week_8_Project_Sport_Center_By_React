// Başına ekle:
(function () {
  function initSite() {
    //Including all js code here. Wrap by initSite() functon and expose by window.initSite().
    // We will call it at main.jsx by window.initSite && window.initSite() after Reaxt render.
    // We did this to ensure that DOMContentLoaded listener will be triggerred after React mount.

    // For hamburger menu;
    document.addEventListener("DOMContentLoaded", () => {
      const menuBtn = document.getElementById("menu-btn");
      const navMenu = document.getElementById("nav-menu");

      menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
        navMenu.classList.toggle("nav-open");
      });
    });

    // adding background color to navbar when scrolling down
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("bg-[#355592]");
      } else {
        header.classList.remove("bg-[#355592]");
      }
    });

    //Clasesses section;
    // Selecting all buttons and contents
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove all previous styles
        buttons.forEach((b) => {
          b.style.backgroundColor = "";
          b.style.color = "";
          b.style.boxShadow = "";
        });

        // Hide all contents
        contents.forEach((c) => c.classList.add("hidden"));

        // Add background color, shadow to clicked button
        btn.style.backgroundColor = "var(--background-color-orange)";
        btn.style.color = "var(--text-color-white)";
        btn.style.boxShadow = "0 0 10px rgba(255,165,0,0.6)";

        // Show related content
        const target = document.getElementById(btn.dataset.target);
        target.classList.remove("hidden");
      });
    });

    // Activating first content as default
    buttons[0].click();

    // BMI Indicator:
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const indicator = document.getElementById("bmi-indicator");

    // Inıtially at right end
    indicator.style.left = "89.5%";

    function updateBMI() {
      const height = parseFloat(heightInput.value) / 100; // cm to m
      const weight = parseFloat(weightInput.value);

      if (isNaN(height) || isNaN(weight) || height <= 0) return;

      const bmi = weight / (height * height);

      if (bmi < 18.5) {
        indicator.style.left = "17%";
      } else if (bmi >= 18.5 && bmi < 25) {
        indicator.style.left = "33%";
      } else if (bmi >= 25 && bmi < 30) {
        indicator.style.left = "49%";
      } else if (bmi >= 30 && bmi < 35) {
        indicator.style.left = "65%";
      } else if (bmi >= 35) {
        indicator.style.left = "81%";
      }

      indicator.style.transform = "translateX(-50%)"; // in order triangle to idicate (show) desired point
    }

    heightInput.addEventListener("input", updateBMI);
    weightInput.addEventListener("input", updateBMI);

    // Alternative approach;

    // // BMI Indicator:
    // const heightInput = document.getElementById("height");
    // const weightInput = document.getElementById("weight");
    // const indicator = document.getElementById("bmi-indicator");

    // // Inıtially at right end
    // indicator.style.left = "89.5%";

    // function updateBMI() {
    //   const height = parseFloat(heightInput.value) / 100; // cm to m
    //   const weight = parseFloat(weightInput.value);

    //   if (isNaN(height) || isNaN(weight) || height <= 0) return;

    //   const bmi = weight / (height * height);

    //   // Defining min and max values for BMI
    //   const minBMI = 18.5;
    //   const maxBMI = 35;

    //   // min and max values to adjust triange start and end points according to image
    //   const minLeft = 9; // as percentage, 9% left from image
    //   const maxLeft = 89.5; // as percentage, 10.5% right from image

    //   // Calculating percentage position
    //   let percent = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;

    //   // Controlling boundaries
    //   percent = Math.max(0, Math.min(100, percent));

    //   // Applying min-max
    //   percent = minLeft + (percent / 100) * (maxLeft - minLeft);

    //   // Adjusting triange position
    //   indicator.style.left = `${percent}%`;
    //   indicator.style.transform = "translateX(-50%)"; // in order triangle to idicate (show) desired point
    // }

    // heightInput.addEventListener("input", updateBMI);
    // weightInput.addEventListener("input", updateBMI);
  }

  // expose
  window.initSite = initSite;
})();
