import "./App.css";

function App() {

  return (
    <div className="login-box">
      <h2>Welcome Back</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Success.");
      }}>
        <div className="user-box">
          <input type="text" name="username" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label htmlFor="password">Password</label>
        </div>

        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>Proceed
        </button>
      </form>
    </div>
  )
}

export default App