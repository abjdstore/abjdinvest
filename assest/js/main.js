let animationsEnabled = false;

let width=window.screen.width;

window.onload = function(){
if (width > 992){
    var x = document.getElementById("navbig");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
  }
}





}

function checkScrollPosition() {
  var scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  if (isMobile()) {
    // Code for mobile devices
    if (scrollTop > 1000) {
      enableAnimations();
    } else {
      disableAnimations();
    }
  } else {
    // Code for desktop devices
    if (scrollTop > 3200) {
      enableAnimations();
    } else {
      disableAnimations();
    }
  }
}
function enableAnimations() {
    if (!animationsEnabled) {
      animationsEnabled = true;
      // console.log('Enabling animations');
      resetAnimations();
      
      loadStylesheet();
     setTimeout( disableAnimations,9000)
    }
  }
  
  function resetAnimations() {
    const elementsToReset = document.querySelectorAll('#card, #cblue, #cred, #watch, #box, #camera, #clothes, #shoe, #bags, #fpot');
    
    elementsToReset.forEach((element) => {
      element.style.animation = 'none'; // Remove animation
      element.offsetHeight; // Trigger a reflow, effectively resetting the animation
      element.style.animation = null; // Reset animation property
    });
  }
  
  


function disableAnimations() {
  if (animationsEnabled) {
    animationsEnabled = false;
    console.log('Disabling animations');
  }
}

checkScrollPosition();
// Set an interval to repeatedly check the scroll position
setInterval(checkScrollPosition, 2000);
function isMobile() {
  
  return window.innerWidth <= 768;
}
function loadStylesheet() {
  const stylesheet = document.createElement('link');
  // console.log('test fun');
  
  // Set the attributes for the stylesheet
  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  stylesheet.href = './style_animations.css'; // Replace 'styles.css' with your stylesheet file path
  
  // console.log('test4');
  
  document.head.appendChild(stylesheet);
}


