window.addEventListener("load", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let testname = document.querySelector("input[name=testName]");
    if (testname.value === "") {
      alert("All fields are required!");
      // stop the form submission
      event.preventDefault();
    }
  });
});
