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
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*  Nav-bar click  */
function respondeToClick(e){
    sectionLoc = sectionList[e.target.getAttribute('id')-1];
    window.scrollTo({
        top: sectionLoc.offsetTop,
        behavior: "smooth",
    })
}


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
    navbarList.addEventListener("click", respondeToClick); 
};

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



