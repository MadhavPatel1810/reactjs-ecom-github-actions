import "./App.css";
import Layouts from "./Components/Common/Layouts/Layouts";
import { PrivateRoutes } from "./Routes/PrivateRoutes";

function App() {
  return (
    <div>
      <Layouts>
        <h1>React CI/CD</h1>
        <PrivateRoutes />
      </Layouts>
    </div>
  );
}

export default App;
