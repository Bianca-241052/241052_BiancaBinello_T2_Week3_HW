function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message, " + name + "!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }

  function appendToInput(value) {
    document.getElementById("result").value += value;
  }

  function clearInput() {
    document.getElementById("result").value = "";
  }

  function calculate() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
  }