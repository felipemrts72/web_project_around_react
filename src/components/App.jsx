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
  //-------------------------------------------------

  const [popup, setPopup] = useState(null);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  //-------------------------------------------------

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
  //-------------------------------------------------

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    if (!isLiked) {
      await api
        .addLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard
            )
          );
        })
        .catch((error) => console.error(error));
    } else {
      await api
        .removeLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard
            )
          );
        })
        .catch((error) => console.error(error));
    }
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then((res) => {
        if (res.ok) {
          setCards(
            (prevCards) => prevCards.filter((item) => item._id !== card._id) //Atualizando os cartões retirando o id do cartão excluido
          );
        }
      })
      .catch((error) => console.error(error));
  }
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
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
