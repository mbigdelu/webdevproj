function validateForm() {
  let email = document.forms["login-form"]["email"].value;
  let password = document.forms["login-form"]["password"].value;
  let ottp = document.forms["login-form"]["ottp"].value;

  if (email == "" || email.length < 10) {
    alert("Email is Required");
  }

  if (password.length < 8) {
    alert("Password should be at least 8 digits");
  }

  if (ottp.length != 5) {
    alert("OTTP should be 5 digits");
  } else submit({ email: email, password: password, ottp: ottp });
}

function submit(data) {
  console.log(
    "Email: ",
    data.email,
    "\nPassword: ",
    data.password,
    "\nOTTP: ",
    data.ottp
  );
}

function dropdownHover() {
  document.getElementById("dropbox").className =
    "menu-item dropbox dropbox-show";
  document.getElementById("dropdown-box").className =
    "dropdown-box dropdown-box-show";
  document.getElementById("drop-item").className = "drop-item drop-item-show";
  document.getElementById("dropdown-icon").className = "dropdown-icon";
}

function dropdownUnHover() {
  document.getElementById("dropbox").className = "menu-item dropbox ";
  document.getElementById("dropdown-box").className = "menu-item dropdown-box";
  document.getElementById("drop-item").className = "drop-item";
  document.getElementById("dropdown-icon").className = "dropdown-icon-show";
}
