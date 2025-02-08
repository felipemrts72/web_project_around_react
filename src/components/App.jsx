import { useState } from "react";
import logo from "../images/logo.png";
import editButton from "../images/Edit_Button.png";
import addLocal from "../images/Add_Button.png";

//Components
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import Popup from "./Main/components/Popup/Popup.jsx";
import NewCard from "./Main/components/Popup/components/NewCard/NewCard.jsx";
import EditAvatar from "./Main/components/Popup/components/EditAvatar/EditAvatar.jsx";
import EditProfile from "./Main/components/Popup/components/EditProfile/EditProfile.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header logo={logo} editButton={editButton} addLocal={addLocal} />
        <Main />
        <Footer />
        <Popup>
          <EditProfile />
        </Popup>
      </div>
    </>
  );
}

export default App;
