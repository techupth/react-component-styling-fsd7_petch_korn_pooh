import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" /><br/><br/>
        <Button />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" message="This is an error alert box" /><br/>
        <Alert type="warning" message="This is a warning alert box" /><br/>
        <Alert type="info" message="This is an info alert box" /><br/>
        <Alert type="success" message="This is a success alert box" /><br/>
      </div>
    </div>
  );
}

export default App;
