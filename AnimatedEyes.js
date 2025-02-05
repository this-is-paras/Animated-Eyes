let pupils = document.getElementsByClassName('pupil');
console.log(pupils);
let pupilsArr = Array.from(pupils);

let pupilStartPoint = -100;
let pupilRange = 200;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth ;
let currentXPosition = 0;
let fracXValue = 0;

let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;    

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;
    // console.log("X = " + fracXValue);

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;
    // console.log("Y = " + fracYValue);
    let pupilXCurrentPosition = pupilStartPoint +  (fracXValue * pupilRange);
    let pupilYCurrentPosition = pupilStartPoint +  (fracYValue * pupilRange);

    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform= `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
    })
};     

const windowResize = (event) => {
     mouseXEndPoint = window.innerWidth;
     mouseYEndPoint = window.innerHeight
}


window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);