/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/** 
 * Define Global Variables
*/
const sectionList = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
const headerEl = document.querySelector("header.page__header");
const menuButton = document.querySelector("bar-parent");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*  Nav-bar click  */
function respondToClick(e){
    sectionLoc = sectionList[e.target.getAttribute('id')-1];
    window.scrollTo({
        top: sectionLoc.offsetTop,
        behavior: "smooth",
    })
}

/* Nav-bar menu click */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu() {
    for (let section of sectionList) {
        let element = document.createElement('li');
        element.textContent = section.getAttribute("data-nav");
        element.classList.add("menu__link");
        
        let section_cnt = section.getAttribute("data-nav").split(' ')[1]
        element.setAttribute('id',section_cnt);

        navbarList.appendChild(element);
        navbarList.firstElementChild.classList.add("active");
    }
}

// Add class 'active' to section when near top of viewport
function setActive() {
    document.addEventListener('scroll', function () {
        sectionList[0].classList.remove("active")
        const sectionHeight = sectionList[0].offsetHeight;

        for (i = 0; i < sectionList.length; i++) {

            if (window.scrollY >= headerEl.offsetHeight + (sectionHeight * i) &&
                window.scrollY < headerEl.offsetHeight + (sectionHeight * (i + 1))
            ) {
                sectionList[i].classList.add('your-active-class');
                navbarList.children[i].classList.add('active');
            }
            else {
                sectionList[i].classList.remove('your-active-class');
                navbarList.children[i].classList.remove('active');
            }
        }

    })

}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    navbarList.addEventListener("click", respondToClick); 
};


// Menu function
function clickMenu(){
    document.addEventListener('click', function(){
        const navbarItem = document.querySelectorAll(".navbar__menu .menu__link");
        //console.log(navbarItem[0].style.display);
        if(navbarItem[0].style.display === "" && window.innerWidth < 701){
            for (i=0;i<navbarItem.length;i++){
                navbarItem[i].style.display = "block"
                //console.log(navbarItem[i].style);
            }
        } else if (navbarItem[0].style.display === "block" && window.innerWidth < 701) {
            for (i=0;i<navbarItem.length;i++){
                navbarItem[i].style.display = ""
                //console.log(navbarItem[i].style);
            }
        }
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildMenu();

// Scroll to section on link click
scrollToSection();


// Set sections as active
setActive();
/*
document.addEventListener("scroll", function(){
    console.log(`ScrollY: ${window.scrollY}`);
})
*/
clickMenu();



