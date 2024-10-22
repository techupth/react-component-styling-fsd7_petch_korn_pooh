import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type = "primary"/> <br/>
        <Button/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type = "error"/>
        <Alert type = "warning"/>
        <Alert type = "info"/>
        <Alert type = "success"/>
      </div>
    </div>
  );
}

export default App;
