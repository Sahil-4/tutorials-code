import { useState } from "react";

function Auth() {
  const [mode, setMode] = useState("login");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const switchMode = () => setMode(mode === "login" ? "signup" : "login");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // !TODO - we will have to check mode also before making API call

    console.log(user);

    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>{mode === "login" ? "Welcome back" : "Create New Account"}</h2>

        {mode === "signup" && (
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required={true}
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required={true}
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required={true}
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
          }}
        />

        <button type="submit" className="pointer">
          {mode === "login" ? "Login" : "Sign up"}
        </button>

        <p>
          {mode === "login" ? "Dont " : "Already "}have an account ?
          <span className="pointer" onClick={switchMode}>
            {mode === "login" ? " Sign up here" : " Login here"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Auth;
