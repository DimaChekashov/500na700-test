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
});
