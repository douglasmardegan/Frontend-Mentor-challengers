document.addEventListener("DOMContentLoaded", () => {
  let dice_circle = document.querySelector(".dice_circle");

  dice_circle.addEventListener("onmouseover", () => {
    return startShakeDice();
  });

  dice_circle.addEventListener("onmouseout", () => {
    return stopShakeDice();
  });
});

function startShakeDice() {
  let dice_icon = document.querySelector(".dice_icon");
  dice_icon.style.animation = "tilt-shaking .15s infinite";
}

function stopShakeDice() {
    let dice_icon = document.querySelector(".dice_icon");
    dice_icon.style.animation = "none";
  }
  
