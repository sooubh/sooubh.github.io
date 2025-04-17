document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");
   ripple.className = "ripple";
   document.body.appendChild(ripple);

   ripple.style.left = `${e.clientX}px`;
   ripple.style.top = `${e.clientY}px`; 
   ripple.style.animation = `ripple-effect .4s  linear`;

   ripple.onanimationend = () => {
     document.body.removeChild(ripple);
   }
}

let circleProgressElements = document.querySelectorAll('.circle-progress');
let progressValueElements = document.querySelectorAll('.progress-value'); 

let progressStartValues = [0, 0, 0, 0, 0];
let progressEndValues = [90, 78, 70, 60, 85];
let speed = 50; 

circleProgressElements.forEach((circleProgress, index) => {
   let progress = setInterval(() => {
      progressStartValues[index]++;
      progressValueElements[index].textContent = `${progressStartValues[index]}%`;

      circleProgress.style.background = `conic-gradient(#13e30c ${progressStartValues[index] * 3.6}deg, #bbb5b57e 0deg)`; 

      if (progressStartValues[index] == progressEndValues[index]) {
         clearInterval(progress);
      }
   }, speed);
});
