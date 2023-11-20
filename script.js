let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
let options = document.querySelectorAll("#nav h4");
let elementsHeading = document.querySelectorAll(".elem h2");
let testimonialPara = document.querySelector("#testimonial p");
let p4Heading = document.querySelector("#page4 h1");
let arrowDivContainer = document.querySelector("#arrow-div-container");

let comments = [
    "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",
    "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!",
    "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",
    "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. <br>Worth a visit if you haven’t been!"
]

document.addEventListener("mousemove",(event)=>{
    cursor.style.left = event.x + "px";
    cursor.style.top = event.y+ "px";
})

document.addEventListener("mousemove",(event)=>{
    cursorBlur.style.left = event.x -200 + "px";
    cursorBlur.style.top = event.y -200 + "px";
})

let i=0;
setInterval(()=>{
    if(i===3){ i=0; }
    testimonialPara.textContent = comments[i];
    i++;
},5000)

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

options.forEach(function(elem){
    elem.addEventListener('mouseenter',()=>{
        cursor.style.scale = 3;
        cursor.style.border = "0.5px solid white";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener('mouseleave',()=>{
            cursor.style.scale = 1;
            cursor.style.border = "none";
            cursor.style.backgroundColor = "#95c11e"
    })
})

elementsHeading.forEach(function(elem){
    elem.addEventListener('mouseenter',()=>{
            console.log(p4Heading);
            p4Heading.classList.add("green-outline");
            cursor.style.scale = 3;
            cursor.style.border = "0.5px solid white";
            cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener('mouseleave',()=>{
            console.log(p4Heading);
            p4Heading.classList.remove("green-outline");
            cursor.style.scale = 1;
            cursor.style.border = "none";
            cursor.style.backgroundColor = "#95c11e"
    })
})

gsap.from("#about-us img, #about-us-info",{
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        //markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.from("#cards-container",{
    opacity: 0,
    duration: 2,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        //markers: true,
        start: "top 65%",
        end: "top 60%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 46%",
        scrub: 5
    }
})

gsap.from("#colon2", {
    x: "100%",  // Start at 100% right
    y: "100%",  // Start at 100% bottom
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 90%",  // Adjust the start point
        end: "top 50%",   // Adjust the end point
        scrub: 5  // Adjust scrub value
    }
})

gsap.from("#page4 h1",{
    y: 30,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",  // Adjust the start point
        end: "top 70%",   // Adjust the end point
        scrub: 3  // Adjust scrub value
    }
})

arrowDivContainer.addEventListener('mouseenter',()=>{
    cursor.style.scale = 4;
    cursor.style.border = "0.5px solid white";
    cursor.style.backgroundColor = "transparent";
})

arrowDivContainer.addEventListener('mouseleave',()=>{
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#95c11e"
})
