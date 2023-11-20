////////////////////////////////////
// Normal Button and other Logic //
///////////////////////////////////

const moveUpBtn = document.querySelector("#move-up");
const moveDownBtn = document.querySelector("#move-down");
const vehiclePreview = document.querySelector("#vehicle-preview");
//const smokeVideo = document.querySelector(".smoke");
const vehicleIcons = document.querySelectorAll(".vehicle-icon");
let dropdownToggleBtns = document.querySelectorAll(".dropdown-toggle");
let dropDownValues = document.querySelectorAll(".dropdown-menu ul li");
let selectedPrice = document.querySelector("#selected-price");
let selectedYear = document.querySelector("#selected-year");
let vehicleYear = document.querySelector("#vehicle-year");
let vehiclePrice = document.querySelector("#vehicle-price");

let blueBanner = document.querySelector("#blue-banner")
let page1 = document.querySelector("#page1")
let navBar = document.querySelector("nav");
let cursor = document.querySelector(".cursor");

let vehicle3Icon = document.querySelector("#vehicle3");
let vehicle3Img = document.querySelector("#vehicle3 img");


let currentIndex = 3;
let startingPhotoIndex = 1;
let endingPhotoIndex = 5;


//Mouse follower
document.body.addEventListener('mousemove', (event) => {
 cursor.style.transform = `translate(${event.clientX-10}px, ${event.clientY-10}px)`;
});

moveUpBtn.addEventListener('mouseenter',()=>{
    cursor.classList.add("cursor-on-buttons");
})
moveDownBtn.addEventListener('mouseenter',()=>{
    cursor.classList.add("cursor-on-buttons");
})
moveUpBtn.addEventListener('mouseleave',()=>{
    cursor.classList.remove("cursor-on-buttons");
})
moveDownBtn.addEventListener('mouseleave',()=>{
    cursor.classList.remove("cursor-on-buttons");
})


//Up button animations
let timesCalledUp=0;
let jUp;

function addPaletteUpAnimation() {
    let arrUp = [1,2,3,4,5];
    let k = timesCalledUp;
    let timesThisExecutes=0;

    console.log("Iteration "+timesCalledUp);

    for (let i = 0; i < vehicleIcons.length; i++) {
        if (i == 0 && timesCalledUp==0)
            jUp = timesCalledUp;

        if(timesCalledUp>=1 && i==0)
            jUp = 5-timesCalledUp;

        // if(timesCalledUp>=1 && i==1)
        //     jUp = timesCalledUp-1;
        console.log(`Applying v${arrUp[jUp]}Up animation to element at index ${i}`);

        if (arrUp[jUp] == 4) {
            vehicleIcons[i].children[0].style.animation = `enlargeSize 1s ease-in-out forwards`;
        } else {
            vehicleIcons[i].children[0].style.animation = 'none';
        }

        if(k!=0)
        {
            vehicleIcons[i].style.animation = `v${arrUp[jUp]}Up 1s ease-in-out forwards`;
            jUp++;k--;
        }

        else if(k==0)
        {
            if(timesThisExecutes==0)
            { jUp=0; }

            vehicleIcons[i].style.animation = `v${arrUp[jUp]}Up 1s ease-in-out forwards`;
            jUp++;
            timesThisExecutes++;
        }

    }
    if(timesCalledUp==5)
    timesCalledUp = 0;
    else
    timesCalledUp++;
    timesCalledDown=5-timesCalledUp;
}

let isAnimationInProgress = false;

moveUpBtn.addEventListener('click',()=>{

    if (isAnimationInProgress) {
        return;
    }

    isAnimationInProgress = true;

    const timeline1 = gsap.timeline({
        onComplete: ()=>{
            isAnimationInProgress = false;
        }
    });

    timeline1.to("#vehicle-preview",{
        x: "60%",
        duration: 1.5,
        opacity: 0,
    })

    if(currentIndex==5)
    currentIndex = 1;
    else
    currentIndex++;

    setTimeout(()=>{
        vehicle3Icon.style.backgroundColor = "#dae9fa";
        vehicle3Icon.style.height = "70px"
        vehicle3Icon.style.width = "70px"
        vehicle3Img.style.height = "30px";
    },800)

    setTimeout(addPaletteUpAnimation,500);


    setTimeout(()=>{
        vehiclePreview.setAttribute('src',`./images/image${currentIndex}.png`);
        timeline1.to("#vehicle-preview",{
            x: "-70%",
            opacity: 0,
            duration: 0.5,
        })
        setTimeout(()=>{
            timeline1.to("#vehicle-preview",{
                x: "0%",
                duration: 1.5,
                opacity: 1,
            })
        },650)
     },1700)

        moveDownBtn.disabled = false;
        moveUpBtn.disabled = false;
    
})
// *************** Previous Bike Preview change Logic ************
// vehiclePreview.style.transform = "none";
// vehiclePreview.style.transform = "translateX(70%)";
// vehiclePreview.style.opacity = "0";
// if(currentIndex==5)
// currentIndex = 1;
// else
// currentIndex++;
// setTimeout(() => {
//     vehiclePreview.setAttribute('src',`./images/image${currentIndex}.png`);
//     vehiclePreview.style.left = "-30%";
//     //vehiclePreview.style.transform = "translateX(500px)";
//     vehiclePreview.style.opacity = 0.5;
//     setTimeout(()=>{
//         vehiclePreview.style.opacity = 1;
//         vehiclePreview.style.left = "0%";
//     },100)
// }, 700);
// **********************************************************


//****** Previous Change Palette Down****************
//  function changeIconsDown()
//  {
//     endingPhotoIndex--;

//      if(endingPhotoIndex==1)
//      endingPhotoIndex=5;

//      let j = endingPhotoIndex;
//      for(let i=0;i<5;i++)
//      {
//          if(j==0)
//          j=5;
//          console.log("Before decrement",j);
//          vehicleIcons[i].innerHTML = `<img src="./images/image${j}.png" alt="vehicles">`
//          j--;
//          console.log("After decrement",j);
//      }
//  }
//**********************************************************

//Down button animations
let timesCalledDown=0;
let jDown;
function addPaletteDownAnimation()
{
    let arr = [1,2,3,4,5];
    for (let i = 0; i < vehicleIcons.length; i++) {
        if(i==0)
        jDown=timesCalledDown;
        if(jDown==5)
        jDown=0;
        console.log(`Applying v${arr[jDown]}Down animation to element at index ${i}`);
        if(arr[jDown]==2)
            vehicleIcons[i].children[0].style.animation = `enlargeSize 1s ease-in-out forwards`;
        else 
            vehicleIcons[i].children[0].style.animation = `none`;
        vehicleIcons[i].style.animation = `v${arr[jDown]}Down 1s ease-in-out forwards`;
        jDown++;
    }
    if(timesCalledDown==5)
    timesCalledDown = 0;
    else
    timesCalledDown++;
    timesCalledUp=5-timesCalledDown;
}

moveDownBtn.addEventListener('click',()=>{

    const timeline2 = gsap.timeline();

    setTimeout(()=>{
        vehicle3Icon.style.backgroundColor = "#dae9fa";
        vehicle3Icon.style.height = "70px"
        vehicle3Icon.style.width = "70px"
        vehicle3Img.style.height = "30px";
    },800)

    setTimeout(addPaletteDownAnimation,400);
    
    timeline2.to("#vehicle-preview",{
        x: "-60%",
        duration: 1.5,
        opacity: 0,
    })

    if(currentIndex==1)
    currentIndex = 5;
    else
    currentIndex--;


    setTimeout(()=>{
        vehiclePreview.setAttribute('src',`./images/image${currentIndex}.png`);
        timeline2.to("#vehicle-preview",{
            x: "70%",
            opacity: 0,
            duration: 0.1,
        })
        setTimeout(()=>{
            timeline2.to("#vehicle-preview",{
                x: "0%",
                duration: 1.5,
                opacity: 1,
            })
        },650)
     },1700)

    moveDownBtn.disabled = false;
    moveUpBtn.disabled = false;
})

//Toggle Dropdowns
 dropdownToggleBtns.forEach(function (toggle) {
         toggle.addEventListener("click", function () {
             if(this.parentNode.querySelector(".dropdown-menu").style.display === "block")
             this.parentNode.querySelector(".dropdown-menu").style.display = "none";
            else
            this.parentNode.querySelector(".dropdown-menu").style.display = "block";
             event.stopPropagation(); // Prevent the click event from reaching the window
         });

      //Close dropdown menu if user clicks outside of it
      window.addEventListener("click", function (event) {
          if (!event.target.classList.contains("dropdown-toggle")) {
              var dropdowns = document.getElementsByClassName("dropdown-menu");
              for (var i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.style.display==="block") {
                      openDropdown.style.display="none";
                  }
             }
         }
      });
 });


 //Value selected in dropdown occurs 
 dropDownValues.forEach((ddVal)=>{
        ddVal.addEventListener('click',(event)=>{
            if(vehicleYear.contains(event.target))
            {
                selectedYear.innerHTML = event.target.textContent;
            }
            if(vehiclePrice.contains(event.target))
            {
                selectedPrice.innerHTML = event.target.textContent;
            }
    })
 })
 

