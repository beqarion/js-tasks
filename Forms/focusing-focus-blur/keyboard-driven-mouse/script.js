const mouse = document.getElementById("mouse");
const mouseWidth = mouse.clientWidth;
const mouseHeight = mouse.clientHeight;

mouse.addEventListener("focus", () => {
  console.log(`Mouse gets focused`);
});
mouse.addEventListener("blur", () => {
  console.log(`Mouse gets blurred`);
});

mouse.addEventListener("keydown", onMove);

function onMove(event) {
  const { key } = event;

  switch (key) {
    case "ArrowUp":
      console.log(`${key}!`);
      break;
    case "ArrowDown":
      console.log(`${key}!`);
      break;
    case "ArrowLeft":
      console.log(`${key}!`);
      break;
    case "ArrowRight":
      console.log(`${key}!`);
      break;

    default:
      break;
  }
}
