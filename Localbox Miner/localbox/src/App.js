import { useContext } from "react";
import "./App.css";
import { Themecontex } from "./context/Themecontext";
import Title from "./componunts/Title";
import Contain from "./componunts/Contain";
function App() {
  const { theme, ToggleTheme } = useContext(Themecontex);

  return (
    <div id="container">
      <div >
        <div
           id="main"
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <Title/>
          <Contain/>
        </div>
        <button onClick={ToggleTheme} id="btn">changeTheme</button>
      
      </div>

    </div>
  );
}

export default App;
