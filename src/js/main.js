const removeClasses = (elems, className) =>
    elems.forEach((elem) => elem.classList.remove(className));

function accordion() {
    const accordions = document.querySelectorAll(".faq__item");

    accordions.forEach((accordion) => {
        accordion.querySelector(".faq__item-content").style.maxHeight = `${
            accordion.querySelector(".faq__item-text").offsetHeight
        }px`;

        accordion.addEventListener("click", () => {
            if (accordion.classList.contains("active")) {
                accordion.classList.remove("active");
            } else {
                removeClasses(accordions, "active");
                accordion.classList.add("active");
            }
        });
    });
}

function menuList() {
    const lists = document.querySelectorAll(".nav__inner");

    lists.forEach(list => {
        list.addEventListener("mouseover", () => {
            list.parentNode.classList.add("active");
        });
        list.addEventListener("mouseout", () => {
            list.parentNode.classList.remove("active");
        });
    });
}

function menu() {
    const header = document.querySelector(".header");
    const body = document.querySelector("body");
    const bodyHeight = header.offsetHeight;

    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            body.style.paddingTop = `${bodyHeight}px`;
            header.classList.add("fixed");
        } else {
            body.style.paddingTop = "0";
            header.classList.remove("fixed");
        }
    };
}

window.addEventListener("DOMContentLoaded", function () {
    $("#main-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 1,
        dots: false,
        navText: ["", ""],
    });
    accordion();
    menuList();
    menu();
});
