document.addEventListener("DOMContentLoaded", () => {
  let dice_circle = document.querySelector(".dice_circle");

  dice_circle.addEventListener("onclick", () => {
    return getNewAdvice();
  });
});

function getNewAdvice() {
  let url = "https://api.adviceslip.com/advice";

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector("#advice_id").innerHTML = data.slip.id;
      document.querySelector("#advice_text").innerHTML = `“${data.slip.advice}”`;
    });
}
