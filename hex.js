// Color Changer

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is Loaded");
  const colorBox = document.getElementById("color-box");
  const changeBTN = document.getElementById("change-color-btn");
  const colorCode = document.getElementById("color-code");

  // Function to get random number

  const getRandomColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215).toString(16);

    const randomColor = `#${randomNum}`;
    return randomColor;
  };

  changeBTN.addEventListener("click", () => {
    colorBox.style.backgroundColor = `${getRandomColor()}`;
    colorCode.innerHTML = `${getRandomColor()}`;
  });
});
