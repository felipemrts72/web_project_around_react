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

  const handleUpdateUser = (data) => {
    (async () => {
      await api.profileEdit(data).then((newUser) => {
        setCurrentUser(newUser);
        handleClosePopup();
      });
    })().catch((err) => {
      `UPDATE ERRO - ${err}`;
    });
  };

  const [popup, setPopup] = useState(null);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateAvatar = (url) => {
    console.log(url);

    (async () => {
      await api.avatarEdit(url).then((newUser) => {
        setCurrentUser(newUser);
        handleClosePopup();
      });
    })().catch((err) => {
      `UPDATE ERRO - ${err}`;
    });
  };

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider
          value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
        >
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
