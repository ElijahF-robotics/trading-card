let card = document.getElementById("card");
let cardInner = document.getElementById('cardInner');

let xPercent = 0;
let yPercent = 0;
let isHovering = false;
let isFlipped = false;
let isFlipping = false




card.addEventListener("click", function() {
    isFlipped = !isFlipped;
    cardInner.classList.toggle("flipped");
    // isFlipping = true;

    // const transitionTime = 600;
    //
    // cardInner.style.transition = `all ${transitionTime / 1000}s`;
    //
    // setTimeout(function() {
    //     isFlipping = false;
    // }, transitionTime);
})

// cardInner.addEventListener("mouseenter", function() {
//     isHovering = true;
//     cardInner.style.transition = "transform 0.2s";
//
// })
//
// cardInner.addEventListener("mouseleave", function() {
//     isHovering = false;
//     const flipRotation = isFlipped ? 'rotateY(180deg)' : '';
//     cardInner.style.transform = `${flipRotation} rotateX(0deg) rotateY(0deg)`
//     cardInner.style.boxShadow = `none`;
//
//
//     cardInner.style.transition = `all 1s`;
// })
//
// cardInner.addEventListener("mousemove", (event) => {
//     if (isFlipping) return;
//     isHovering = true;
//     const rect = cardInner.getBoundingClientRect();
//     xPercent = (event.clientX - rect.left - rect.width / 2) / rect.width;
//     yPercent = (event.clientY - rect.top - rect.height /2) / rect.height;
//
//
//
//     cardInner.style.transition = 'none';
//
//
// })
//
// function animateRotation() {
//
//     if (isHovering) {
//         const tiltScale = 10
//
//         let tiltX = yPercent * tiltScale;
//         let tiltY = -1 * xPercent * tiltScale;
//
//
//         const shadowScale = 10
//
//         let shadowX = xPercent * shadowScale;
//         let shadowY = yPercent * shadowScale;
//         const shadowBlur = Math.abs(shadowX) + Math.abs(shadowY);
//
//         if (isFlipped) {
//             tiltX *= -1;
//             shadowX *= -1;
//         }
//
//         const flipRotation = isFlipped ? 'rotateY(180deg)' : '';
//         cardInner.style.transform = `${flipRotation} rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
//         cardInner.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0,0,0,0.3`;
//
//
//     }
//
//     requestAnimationFrame(animateRotation)
//
// }
//
// animateRotation();

