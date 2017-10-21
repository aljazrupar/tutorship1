import React from 'react';

class App extends React.Component {
   render() {
      return (
        <div className="signupSection">
          <div className="info">
            <h2>Coimbra has something new and really usefull</h2>
            <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
            <p>Do you want earn money and gain CV?</p>
          </div>
          <form action="#" method="POST" className="signupform">
            <h2>Register</h2>
            <ul className="noBullet">
              <li>
                <label for="name"></label>
                <input type="text" className="inputFields" id="name" name="name" placeholder="Name" value="" oninput="return userNameValidation(this.value)" required/>
              </li>

              <li>
                <label for="surname"> </label>
                <input type="text" className="inputFields" id="surname" name="surname" placeholder="Surname" value=""  required/>
              </li>

              <li>
                <label for="email"></label>
                <input type="email" className="inputFields" id="email" name="email" placeholder="Email" value="" required/>
              </li>

              <li>
                <label for="phoneNumber"></label>
                <input type="number" className="inputFields" id="phoneNumber" name="phoneNumber" placeholder="Phone number" value="" required/>
              </li>

              <li>
                <label for="password"></label>
                <input type="password" className="inputFields" id="password" name="password" placeholder="Password" value="" oninput="return passwordValidation(this.value)" required/>
              </li>

              <li>
                <label for="studyField"> </label>
                <input type="text" className="inputFields" id="studyField" name="studyField" placeholder="Your study field" value="" required/>
              </li>

              <li>
                <label for="description"> </label>
                <textarea type="text" className="inputDescription" id="description" name="description" placeholder="Insert your own description of courses you had." required/>
              </li>

              <li id="center-btn">
                <input type="submit" id="join-btn" name="join" alt="Join" value="Join" />
              </li>

            </ul>
          </form>
        </div>
      );
   }

}

function userNameValidation(usernameInput) {
    var username = document.getElementById("username");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        username.setCustomValidity(issueArr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}

function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
        issueArr.push("Password must be between 7-15 characters.");
    }

    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}

export default App;
