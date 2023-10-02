function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const numberPattern = /^-?\d+(\.\d+)?$/;

  if (username == "" && email == "" && number == "") {
    document.getElementById("result").textContent =
      "Hey! Seems like you forgot to fill one of the blocks.";
  } else {
    if (emailPattern.test(email) && numberPattern.test(number)) {
      document.getElementById("result").textContent = "Signed Up! Succesfully!";
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    } else {
      document.getElementById("result").textContent =
        "Seems like you typed a invalid data!!";
    }
  }
}
