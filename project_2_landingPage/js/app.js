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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu(){
    for (let section of sectionList){
        let element = document.createElement('li');
        element.textContent = section.getAttribute("data-nav");
        element.classList.add("menu__link");
        navbarList.appendChild(element);
        navbarList.firstElementChild.classList.add("active");
    }
}

// Add class 'active' to section when near top of viewport
function setActive(){
    document.addEventListener('scroll', function(){
        sectionList[0].classList.remove("active")
        const sectionHeight = sectionList[0].offsetHeight;

        for (i=0;i<sectionList.length;i++){
            
            if (window.scrollY >= headerEl.offsetHeight+(sectionHeight*i) &&
                window.scrollY < headerEl.offsetHeight+(sectionHeight*(i+1))
                ){
                    sectionList[i].classList.add('your-active-class');
                    navbarList.children[i].classList.add('active');
            }
            else {
                sectionList[i].classList.remove('your-active-class');
                navbarList.children[i].classList.remove('active');
            }

        }
        /*
        if (window.scrollY < 
            headerEl.offsetHeight+(sectionHeight*1)
            ) {
                sectionList[0].classList.add('your-active-class')
                console.log("section 1 added!")
                console.log(`scrollY: ${window.scrollY}`)
            }
        else if (window.scrollY >= headerEl.offsetHeight+(sectionHeight*1) &&
                 window.scrollY < headerEl.offsetHeight+(sectionHeight*2)
        
            ) {
                sectionList[0].classList.remove('your-active-class')
                sectionList[1].classList.add('your-active-class')
                console.log("section 2 added!")
                console.log(`scrollY: ${window.scrollY}`)
            }
        else if (window.scrollY >= headerEl.offsetHeight+(sectionHeight*2) &&
                 window.scrollY < headerEl.offsetHeight+(sectionHeight*3)
   
            ) {
                sectionList[1].classList.remove('your-active-class')
                sectionList[2].classList.add('your-active-class')
                console.log("section 3 added!")
                console.log(`scrollY: ${window.scrollY}`)
            }
        */
    })
    
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildMenu();
/*
document.addEventListener('scroll', function(){
    console.log(`Window scroll Y is: ${window.scrollY}`);
    console.log(`Document.body.offsetHeight: ${document.body.offsetHeight}`);
    console.log(`Window.innerHeight: ${window.innerHeight}`);
})

console.log(`offsetHeight of header: ${headerEl.offsetHeight}`);


for (let el of sectionList){
    let elParent = el.parentElement
    console.log(`Parent Element: ${elParent}`);
    console.log(`offsetHeight of ${elParent.id} is: ${elParent.offsetHeight}`)
    console.log(`innerHeight of ${elParent.id} is: ${elParent.innerHeight}`)
}
*/

// Scroll to section on link click

// Set sections as active
setActive()

