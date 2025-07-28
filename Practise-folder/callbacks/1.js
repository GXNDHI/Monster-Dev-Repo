function login(username, password, successCallback, failureCallback) {
  let validUsername = "gxndhi";
  let validPassword = 123;

  setTimeout(() => {
    if (username === validUsername && password === validPassword) {
      successCallback("Login Successful");
    } else {
      failureCallback("Login Failed");
    }
  }, 1000);
}

function onLoginSuccess(message) {
  console.log(message);
}

function onLoginFailure(message) {
  console.log(message);
}

// Correct usage with actual function names
login("gxndhi", 123, onLoginSuccess, onLoginFailure);
