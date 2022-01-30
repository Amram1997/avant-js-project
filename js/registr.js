// window.onload = function () {
//   // variables
//   let first_name = document.querySelector("#firstName");
//   let last_name = document.querySelector("#lastName");
//   let user_email = document.querySelector("#userEmail");
//   let user_password = document.querySelector("#userPassword");
//   let confirm_password = document.querySelector("#confirmPassword");
//   let user_date = document.querySelector("#userDate");
//   let errH3 = document.querySelector("#h33");
//   let register_btn = document.querySelector("#registerBtn");
//   let bodyDiv = document.getElementById("root");

//   // ////////
//   // functions

//   function User(
//     firstName,
//     lastName,
//     userEmail,
//     userPassword,
//     confirmPassword,
//     userDate
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userEmail = userEmail;
//     this.userPassword = userPassword;
//     this.confirmPassword = confirmPassword;
//     this.userDate = userDate;
//     this.id = Date.now();
//   }

//   function saveUser() {
//     let parseProf;
//     let prof;
//     if (
//       first_name.value === "" ||
//       last_name.value === "" ||
//       user_email.value === "" ||
//       user_password.value === "" ||
//       confirm_password.value === "" ||
//       user_date.value === ""
//     ) {
//       errH3.innerText = "Please enter the fields correctly";
//       errH3.style.color = "red";
//       event.preventDefault();
//     } else {
//       let fN = first_name.value.trim();
//       let lN = last_name.value.trim();
//       let uE = user_email.value.trim();
//       let uP = user_password.value.trim();
//       let cP = confirm_password.value.trim();
//       let uD = user_date.value;
//       let user = new User(fN, lN, uE, uP, cP, uD);
//       let regexEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(user.userEmail);
//       if (
//         user.userPassword === user.confirmPassword &&
//         user.userPassword.length > 5 &&
//         regexEmail === true
//       ) {
//         saveLocal(user);
//         prof = getLocal(user);
//         parseProf = JSON.parse(prof);
//         location.href = "../pages/profile.html";
//       } else if (
//         user.userPassword !== user.confirmPassword ||
//         regexEmail === false
//       ) {
//         errH3.innerHTML = "Please enter the fields correctly";
//         errH3.style.color = "red";
//       }
//       event.preventDefault();
//     }
//   }

//   function saveLocal(user) {
//     localStorage.setItem("avantUser", JSON.stringify(user));
//   }

//   function getLocal(user) {
//     return localStorage.getItem("avantUser", user);
//   }
//   function print(obj) {
//     bodyDiv.innerHTML = `welcome ${obj.firstName}`;
//   }

//   register_btn?.addEventListener("click", saveUser);
// };

window.onload = function () {
  // variables
  let first_name = document.querySelector("#firstName");
  let last_name = document.querySelector("#lastName");
  let user_email = document.querySelector("#userEmail");
  let user_password = document.querySelector("#userPassword");
  let confirm_password = document.querySelector("#confirmPassword");
  let user_date = document.querySelector("#userDate");
  let errH3 = document.querySelector("#h33");
  let register_btn = document.querySelector("#registerBtn");
  let bodyDiv = document.getElementById("root");

  function User(
    firstName,
    lastName,
    userEmail,
    userPassword,
    confirmPassword,
    userDate
  ) {
    this.firstName = firstName.value.trim();
    this.lastName = lastName.value.trim();
    this.userEmail = userEmail.value.trim();
    this.userPassword = userPassword.value.trim();
    this.confirmPassword = confirmPassword.value.trim();
    this.userDate = userDate.value;
    this.id = Date.now();
  }

  function validEmptyInput(obj) {
    let flag = false;
    let {
      firstName,
      lastName,
      userEmail,
      userPassword,
      confirmPassword,
      userDate,
    } = obj;

    if (
      firstName === "" ||
      lastName === "" ||
      userEmail === "" ||
      userPassword === "" ||
      confirmPassword === "" ||
      userDate === ""
    ) {
      errH3.innerHTML = "Please enter the fields correctly";
      errH3.style.color = "red";
      flag = false;
      return flag;
    } else {
      flag = true;

      return flag;
    }
  }

  function validEmailPassword(obj) {
    let flag = false;
    let {
      firstName,
      lastName,
      userEmail,
      userPassword,
      confirmPassword,
      userDate,
    } = obj;
    let regexEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(userEmail);
    if (
      userPassword === confirmPassword &&
      userPassword.length > 5 &&
      regexEmail === true
    ) {
      flag = true;
      location.href = "../pages/profile.html";
      return flag;
    } else {
      flag = false;
      errH3.innerText = "Please enter the fields correctly email and password";
      errH3.style.color = "red";
      return flag;
    }
  }

  function saveUser() {
    event.preventDefault();
    let user = new User(
      first_name,
      last_name,
      user_email,
      user_password,
      confirm_password,
      user_date
    );
    console.log(user);
    validEmptyInput(user);
    if (validEmptyInput(user)) {
      validEmailPassword(user);
    }
    saveLocalStorage(user);
  }

  function saveLocalStorage(userObj) {
    localStorage.setItem("avantUser", JSON.stringify(userObj));
  }

  function print(obj) {
    let { firstName, lastName, userDate, userEmail, id } = obj;
    let profileDiv = document.createElement("div");
    profileDiv.className = "profile-div";
    let h3 = document.createElement("h3");
    h3.className = "user-first";
    h3.innerHTML = ` ${firstName} ${lastName}`;
    let h4 = document.createElement("h4");
    h4.className = "user-email";
    h4.innerHTML = `Email ${userEmail}`;
    let p1 = document.createElement("p");
    p1.className = "user-date";
    p1.innerHTML = `Birthday ${userDate}`;
    let p2 = document.createElement("p");
    p2.className = "user-id";
    p2.innerHTML = `id ${id}`;
    profileDiv.append(h3, h4, p1, p2);
    bodyDiv.append(profileDiv);
    console.log(bodyDiv);
  }

  let getUser = JSON.parse(localStorage.getItem("avantUser"));
  console.log(getUser);
  function registerUser() {
    saveUser();
  }
  if (bodyDiv !== null) {
    print(getUser);
  }

  register_btn?.addEventListener("click", registerUser);
};
