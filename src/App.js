import "./App.css";
import Button from "./UI/Button";
import LoginSignupInput from "./UI/LoginSignupInput";

function App() {
  return (
    <div className="App">
      <Button color="#ff5733" name="sendBtn" />
      <LoginSignupInput
        type="email"
        placeholder="Enter email"
        label="Email address"
      />
    </div>
  );
}

export default App;
