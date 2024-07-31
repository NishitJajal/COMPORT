function navAnimation() {
    let navVariable = document.querySelector("nav");

    navVariable.addEventListener("mouseenter", function () {
        let tmline = gsap.timeline();
        tmline.to(".nav-bottom-options", {
            height: "20vh"
        })
        tmline.to(".nav-part-two h5", {
            display: "block"
        })
        tmline.to(".nav-part-two h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })

    navVariable.addEventListener("mouseleave", function () {
        let tmline = gsap.timeline();
        tmline.to(".nav-part-two h5 span", {
            y: 20,
            stagger: {
                amount: 0.2
            }
        })
        tmline.to(".nav-part-two h5", {
            display: "none",
            duration: 0.1
        })
        tmline.to(".nav-bottom-options", {
            height: "0vh",
            duration: 0.2
        })
    })
}
navAnimation();

let headlines = document.querySelectorAll(".right-headlines");

headlines.forEach(function(element){
    element.addEventListener('mouseenter',function(){
        element.childNodes[3].style.opacity = 1;
    })

    element.addEventListener('mouseleave',function(){
        element.childNodes[3].style.opacity = 0;
    })
});
