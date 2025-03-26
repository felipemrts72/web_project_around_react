import { useState, useEffect, useContext } from "react";
import { api } from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getData("cards").then((res) => {
      setCards(res);
      console.log(res);
    });
  }, []);

  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    const id = card._id;

    await api.then((res) => {
      api.getData("cards").then((res) => {
        res.filter((card) => (card._id = id));
        setCards(res);
      });
    });
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <div className="content__profile">
        <div className="content__avatar-edit">
          <img
            src="#"
            alt="Foto de perfil do usuário"
            className="content__avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="content__profile-edit">
          <div className="content__wrap">
            <h1 className="content__title">Jacques Costeau</h1>
            <button
              className="content__edit-button"
              alt="Um botão com uma canela, simbolizando a edição!"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="content__subtitle">Explorador</p>
        </div>
        <button
          className="content__add"
          alt="Um botão com um simbolo de mais, simbolizando a adição de mais fotos!"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </div>
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup}
            onCardLike={handleCardLike}
          />
        ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
