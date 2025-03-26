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
    });
  }, []);

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
            onCardDelete={handleCardDelete}
            onCardDelete={handleCardDelete}
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
