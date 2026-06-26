// =======================================
// LOADING SCREEN
// =======================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});


// =======================================
// MOBILE MENU
// =======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// =======================================
// STICKY NAVBAR
// =======================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(8,20,32,.95)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.3)";
    } else {
        header.style.background = "rgba(10,15,25,.65)";
        header.style.boxShadow = "none";
    }

});


// =======================================
// SCROLL REVEAL ANIMATION
// =======================================

const revealElements = document.querySelectorAll(
    ".card, .course, .expert, .stat-card"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

}

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all .8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =======================================
// ANIMATED COUNTERS
// =======================================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);
        const current = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 50);

        if (current < target) {

            const next = current + increment;

            counter.innerText =
                next > target ? target + "+" : next + "+";

            counter.setAttribute("data-count", next);

            setTimeout(updateCounter, 40);

        }

    };

    updateCounter();

});


// =======================================
// ACTIVE NAVIGATION
// =======================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =======================================
// BACK TO TOP BUTTON
// =======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#00d9ff",
    color: "#081420",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "none",
    zIndex: "999",
    transition: ".3s"
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =======================================
// CARD HOVER EFFECT
// =======================================

const cards = document.querySelectorAll(
    ".card, .course, .expert"
);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        card.style.transform =
            `rotateY(${x / 25}deg) rotateX(${-y / 25}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

});


// =======================================
// FLOATING GLOW EFFECT
// =======================================

setInterval(() => {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "12px";
    glow.style.height = "12px";
    glow.style.borderRadius = "50%";
    glow.style.background = "#00d9ff";
    glow.style.left =
        Math.random() * window.innerWidth + "px";
    glow.style.top =
        window.innerHeight + "px";
    glow.style.opacity = ".4";
    glow.style.pointerEvents = "none";
    glow.style.zIndex = "-1";
    glow.style.transition = "4s linear";

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.style.transform =
            `translateY(-${window.innerHeight + 200}px)`;
        glow.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        glow.remove();
    }, 4500);

}, 500);