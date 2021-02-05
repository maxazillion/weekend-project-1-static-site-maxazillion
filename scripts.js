const allInputs = Array.from(document.querySelectorAll("input"));
const textArea = document.querySelector("#msg");
console.log(textArea);

textArea.addEventListener("change", () => {
  if (textArea.value.length >= 1) {
    if (textArea.classList.contains("error-border")) {
      textArea.classList.remove("error-border");
    }
    textArea.classList.add("valid-border");
  } else {
    if (textArea.classList.contains("valid-border")) {
      textArea.classList.remove("valid-border");
    }
    textArea.classList.add("error-border");
  }
});
