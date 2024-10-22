import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
import imageFrown from "./assets/frown.svg";
import imageWarn from "./assets/warn.svg";
import imageInfo from "./assets/info.svg";
import imageSuccess from "./assets/success.svg"


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" image={imageFrown} message="This is error alert box"/>
        <Alert type="warning" image={imageWarn} message="This is warning alert box"/>
        <Alert type="info" image={imageInfo} message="This is info alert box"/>
        <Alert image={imageSuccess} message="This is success alert box"/>
      </div>
    </div>
  );
}

export default App;
