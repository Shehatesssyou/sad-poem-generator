function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-input");

  let apiKey = "bb2t25b2b81of768700a363767494357";
  let prompt = `User Instructions: Generate a SIX-LINE poem about ${instructionInput.value}`;
  let context =
    "You are a soulful poet. Your poems are short but evoke deep emotions and resonate with the human experience. Your mission is to generate a SIX-line poem, following the user's instructions. MAKE IT IN SIMPLE HTML FORMAT (don't include 'html' to the poem) AND SEPARATE EACH LINE WITH A <br />.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.getElementById("poem-form");
poemForm.addEventListener("submit", generatePoem);
