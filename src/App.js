import "./App.css";
import Layouts from "./Components/Common/Layouts/Layouts";
import { PrivateRoutes } from "./Routes/PrivateRoutes";

function App() {
  return (
    <div>
      <Layouts>
        <PrivateRoutes />
      </Layouts>
    </div>
  );
}

export default App;
