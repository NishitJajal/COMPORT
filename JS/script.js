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

function headlineAnimation() {
    let headlines = document.querySelectorAll(".right-headlines");

headlines.forEach(function(element){
    element.addEventListener('mouseenter',function(){
        gsap.to(element.childNodes[3],{
            opacity:1,
            scale:1
        })
    })

    element.addEventListener('mouseleave',function(){
        gsap.to(element.childNodes[3],{
            opacity:0,
            scale:0
        })
    })

    element.addEventListener("mousemove",function(event){
        gsap.to(element.childNodes[3],{
            x: event.x - element.getBoundingClientRect().x,
            y: event.y - element.getBoundingClientRect().y - 120,
        })
    })
});
}

headlineAnimation();

function videoPlayback(){
    let playButton = document.querySelector(".play-button");
    
    let video = document.querySelector(".pgthree video");

    playButton.addEventListener('click',function(){
        video.play()
        gsap.to(video,{
            transform: "scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    
    video.addEventListener('click', function(){
        video.pause()
        gsap.to(video,{
            transform: "scaleX(0.8) scaleY(0)",
            opacity:0,
            borderRadius:30
        })
    })
}

videoPlayback();

function pgFiveVideo() {
    let videoPart = document.querySelectorAll(".pgfive-right-part");

    console.log(videoPart);
    
    videoPart.forEach(function(element){
        element.addEventListener('mouseenter',function(){
            element.childNodes[3].style.opacity = 1;
            element.childNodes[3].play();
        })
    
        element.addEventListener('mouseleave',function(){
            element.childNodes[3].style.opacity = 1;
            element.childNodes[3].load();
        })
    })
}

pgFiveVideo();
