/* =========================================================
   EARNEST PROPERTY SERVICES
   GLOBAL JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });

    });

}


/* =========================================================
   ACTIVE PAGE NAVIGATION
========================================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

if (navLinks) {

    navLinks.querySelectorAll("a").forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage &&
            linkPage !== "#" &&
            linkPage.split("/").pop() === currentPage
        ) {
            link.classList.add("active");
        }

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(element => {
        observer.observe(element);
    });

}


/* =========================================================
   SCROLL TO TOP
========================================================= */

const scrollTop =
    document.getElementById("scrollTop");

if (scrollTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    });

    scrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   REQUEST A SERVICE → WHATSAPP
========================================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("name")?.value.trim() || "";

        const phone =
            document.getElementById("phone")?.value.trim() || "";

        const email =
            document.getElementById("email")?.value.trim() || "";

        const service =
            document.getElementById("service")?.value || "";

        const location =
            document.getElementById("location")?.value.trim() || "";

        const message =
            document.getElementById("message")?.value.trim() || "";


        // Create WhatsApp message

        const whatsappMessage =

`Hello Earnest Property Services,

I would like to make a service enquiry.

Name: ${name}

Phone: ${phone}

Email: ${email || "Not provided"}

Service Required: ${service}

Property Location: ${location || "Not provided"}

Message:
${message || "No additional message."}`;


        // Earnest Property Services WhatsApp number

        const whatsappNumber =
            "256781515588";


        // Build WhatsApp URL

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (!menuBtn || !navLinks) return;

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("open");

    }

});