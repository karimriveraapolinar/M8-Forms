document.getElementById("submit").addEventListener("click", (event) => {
  const input = document.getElementById("inputField");
  const inputValue = input.value;
  const pattern = /^[a-zA-Z0-9]+$/;

  input.setCustomValidity(pattern.test(inputValue) ? "" : "Please enter only alphanumeric characters.");
  
  if (pattern.test(inputValue)) {
    alert("Input is valid and form has been submitted");
  }
});
