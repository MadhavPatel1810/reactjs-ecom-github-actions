import "./App.css";
import Layouts from "./Components/Common/Layouts/Layouts";
import { PrivateRoutes } from "./Routes/PrivateRoutes";

function App() {
  return (
    <div>
    <h1>Hello</h1>
      <Layouts>
        <PrivateRoutes />
      </Layouts>
    </div>
  );
}

export default App;
