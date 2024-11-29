function mudar() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de Ana Julia Campos de oculos sorrindo")
  } else {
    img.setAttribute("src", "./assets/avatar naju.png")
   img.setAttribute("alt", "foto de Ana Julia Campos sorrindo")
  }
}
