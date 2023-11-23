const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
// const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
    {
        photo:
            'url("https://lh3.googleusercontent.com/a-/ALV-UjVEl_4W-j3t8L2CSZV0KUO2PNvGmGlMKWghbWhRQHksznw=s40-c-rp-mo-br100")',
        name: "Om Rajput",
        description:
            "very very nice 👍 bast quality best service thank you sir"
    },

    {
        photo:
            'url("https://lh3.googleusercontent.com/a/ACg8ocI5yZA9Q_u074ZmiPld8xHQNN8i5pLNjepRap60aCG9=s40-c-rp-mo-br100")',
        name: "Sanju Yadav",
        description:
            "Very good tyres nd friendly bro"
    },
    {
        photo:
            'url("https://lh3.googleusercontent.com/a-/ALV-UjXgpmxZWaCRxIgHMgU-T_NoGYKXCnDxwBoepNHIsQ1cMdw=w60-h60-p-rp-mo-br100")',
        name: "nagender pratap chauhan",
        description:
            "I visited two times....in every visit, great experience...effordable price"
    },
    {
        photo:
            'url("https://lh3.googleusercontent.com/a/ACg8ocLXgDEKSegbQQSL5CYlvLguUVgrf09KZPF3_MDflLyD=s40-c-rp-mo-br100")',
        name: "Meraj Khan",
        description:
            "Super tyres and great experience...effordable price"
    },
    {
        photo:
            'url("https://lh3.googleusercontent.com/a/ACg8ocK64irHG-2Gjo9Ma4eIZ4rbwodM0lFOMAXwanzEEvqV=s40-c-rp-mo-br100")',
        name: "karan Singh",
        description:
            "Good product and good service and very good preson"
    },
    {
        photo:
            'url("https://lh3.googleusercontent.com/a-/ALV-UjUvF-urcn_4CFQI6nDKfq8XjIsYCP7IOXNbhF0e3uTzWw=s40-c-rp-mo-br100")',
        name: "Prahlad Chaudhary",
        description:
            "Cost saving, better service and amazing human beings."
    },
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
    let reviewWrapWidth = reviewWrap.offsetWidth + "px";
    let descriptionHeight = description.offsetHeight + "px";
    //(+ or -)
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 0
        });
    }

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
    });

    tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
    });

    setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
    }, 400);
    setTimeout(() => {
        description.style.height = descriptionHeight;
    }, 400);
    setTimeout(() => {
        personName.innerText = people[personNumber].name;
    }, 400);
    setTimeout(() => {
        profession.innerText = people[personNumber].profession;
    }, 400);
    setTimeout(() => {
        description.innerText = people[personNumber].description;
    }, 400);

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
    });

    if (isChickenVisible) {
        tl.to(chicken, {
            duration: 0.4,
            opacity: 1
        });
    }
}

function setNextCardLeft() {
    if (currentPerson === 3) {
        currentPerson = 0;
        slide("left", currentPerson);
    } else {
        currentPerson++;
    }

    slide("left", currentPerson);
}

function setNextCardRight() {
    if (currentPerson === 0) {
        currentPerson = 3;
        slide("right", currentPerson);
    } else {
        currentPerson--;
    }

    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
    if (chicken.style.opacity === "0") {
        chicken.style.opacity = "1";
        imgDiv.classList.add("move-head");
        surpriseMeBtn.innerText = "Remove the chicken";
        surpriseMeBtn.classList.remove("surprise-me-btn");
        surpriseMeBtn.classList.add("hide-chicken-btn");
        isChickenVisible = true;
    } else if (chicken.style.opacity === "1") {
        chicken.style.opacity = "0";
        imgDiv.classList.remove("move-head");
        surpriseMeBtn.innerText = "Surprise me";
        surpriseMeBtn.classList.add("surprise-me-btn");
        surpriseMeBtn.classList.remove("hide-chicken-btn");
        isChickenVisible = false;
    }
});

window.addEventListener("resize", () => {
    description.style.height = "100%";
});
