import { useState } from "react";
import "./App.css"

function App() {
  // Function to generate and return random password with given length 
  const generatePassword = (length) => {
    // allowed chars [a-z][A-Z][0-9][!@#$%^&*_-+]
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+";
    let password = "";

    // generate characters of password and add each char in password 
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    return password;
  }

  // states to hold password to show on UI 
  const [password, setPassword] = useState("");

  // create function to handle clicks on generate password button 
  const handleOnClick = () => {
    const newPassword = generatePassword(12);
    setPassword(newPassword);
  }

  // lets create a funtion to save password into local storage of browser 
  const savePassword = () => {
    // return if password contains empty string 
    if (password === "") return;

    // lets first retrieve old password // if there is any 
    const allPasswords = localStorage.getItem("password_manager_saver") ? JSON.parse(localStorage.getItem("password_manager_saver")) : [];
    allPasswords.push(password); // adding new password with old passwords 

    // saving all passwords into local storage 
    localStorage.setItem("password_manager_saver", JSON.stringify(allPasswords));

    alert("Password saved.");
  }

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <button onClick={handleOnClick}>Generate Password</button>
      </div>

      <div>
        <strong>Password </strong>{password}
      </div>

      <div>
        <button onClick={savePassword}>Save Password to Localstorage</button>
      </div>
    </div>
  )
}

export default App