console.log('Script is running');
const myButton = document.getElementById("myButton");

// Disable the button
myButton.disabled = true;

// Enable the button
myButton.disabled = false;

const popup = document.getElementById("popup");

// Show the pop-up message
popup.classList.remove("hidden");

// Hide the pop-up message after 3 seconds
setTimeout(() => {
  popup.classList.add("hidden");
}, 3000);