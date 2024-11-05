function shapes() {
  const shapesContainer = document.getElementById("shapesContainer");
  if (
    shapesContainer.style.display === "none" ||
    shapesContainer.style.display === ""
  ) {
    shapesContainer.style.display = "flex";
  } else {
    shapesContainer.style.display = "none";
  }
}
