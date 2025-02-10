import { useState } from "react";
import logo from "../images/logo.png";
import addLocal from "../images/Add_Button.png";

//Components
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
