import { useState } from "react";

import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";

function Header({ logo, editButton, addLocal }) {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo cartão", children: <NewCard /> };
  const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={logo}
          alt="Logo do site, ao logo dos estados unidos"
          className="header__logo-item"
        />
      </div>
      <div className="header__profile">
        <div className="header__avatar-edit">
          <img
            src="#"
            alt="Foto de perfil do usuário"
            className="header__avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <div className="header__profile-edit">
          <div className="header__wrap">
            <h1 className="header__title">Jacques Costeau</h1>
            <img
              src={editButton}
              className="header__edit-button"
              alt="Um botão com uma canela, simbolizando a edição!"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </div>
          <p className="header__subtitle">Explorador</p>
        </div>
        <img
          src={addLocal}
          className="header__add"
          alt="Um botão com um simbolo de mais, simbolizando a adição de mais fotos!"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </div>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </header>
  );
}

export default Header;
