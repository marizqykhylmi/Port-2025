function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "DEVELOPER",
    "PROGRAMMER",
    "GAME DEVELOPER",
    "UI/UX DESIGNER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}
/review all/
document.addEventListener("DOMContentLoaded", () => {
    const reviewAllBtn = document.getElementById("reviewAllBtn");
    const hideAllBtn = document.getElementById("hideAllBtn");
    const hiddenPhotos = document.querySelectorAll(".hidden");
  
    reviewAllBtn.addEventListener("click", () => {
      hiddenPhotos.forEach(photo => photo.classList.remove("hidden"));
      reviewAllBtn.style.display = "none";
      hideAllBtn.style.display = "block";
    });
  
    hideAllBtn.addEventListener("click", () => {
      hiddenPhotos.forEach(photo => photo.classList.add("hidden"));
      reviewAllBtn.style.display = "block";
      hideAllBtn.style.display = "none";
    });
  });
  

window.onload = typeWriter;