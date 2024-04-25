// console.log('Script is running');
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

  favDialog.addEventListener("close", (e) => {
    outputBox.value =
      favDialog.returnValue === "default"
        ? "No return value."
        : `ReturnValue: ${favDialog.returnValue}.`;

        confirmBtn.addEventListener("click", (event) => {
            event.preventDefault(); // We don't want to submit this fake form
            favDialog.close(selectEl.value); // Have to send the select box value here.
            });