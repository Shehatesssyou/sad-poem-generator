function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "aw shit",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.getElementById("poem-form");
poemForm.addEventListener("submit", generatePoem);
