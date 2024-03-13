import "./App.css";
import button from "./button.module.css";

function App() {
  return (
    <div className="App">
      <button className={`${button.btn} ${button.readBtn}`}>Send</button>
    </div>
  );
}

export default App;
