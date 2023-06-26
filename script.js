const burger = document.querySelector(".burger");
const header = document.querySelector("header")
const mobilNav = document.querySelector(".mobil-menu");
const mobilMenuHeadItem = Array.from(document.querySelectorAll(".mobil__sub-menu-head"));


burger.addEventListener("click",() => {
    header.classList.toggle("p-fixed")
    burger.classList.toggle("open");
    mobilNav.classList.toggle("mobil-menu-open");
})

mobilMenuHeadItem.forEach(item => item.addEventListener("click",(e) => {
    e.target.classList.toggle("sub-menu-open")
    if (e.target.classList.contains("fa-chevron-right")) {
        e.target.closest(".mobil__sub-menu-head").classList.toggle("sub-menu-open");
       
    }
}))