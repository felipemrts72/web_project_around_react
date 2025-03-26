import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

//Components
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async () => {
      await api.getData("users/me").then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
