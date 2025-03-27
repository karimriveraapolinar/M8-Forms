document.getElementById("submit").addEventListener("click", (event) => {
  const fieldValue = document.getElementById("inputField");
  const checks = /^[a-zA-Z0-9]+$/;

  if (checks.test(fieldValue.value)) {
    fieldValue.setCustomValidity("");
    alert("Submitted the form");
    document.getElementById("myForm").submit();
  } else {
    fieldValue.setCustomValidity("Please enter only alphanumeric characters.");
  }
});