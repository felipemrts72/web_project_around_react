import { useState } from "react";

import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import ImagePopup from "./components/ImagePopup/ImagePopup";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  <ImagePopup />;

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];
  console.log(cards);

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
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </section>{" "}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
