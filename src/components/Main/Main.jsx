import { useState } from "react";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const editAvatarPopup = { title: "New Card", children: <EditAvatar /> };
  const editProfilePopup = { title: "New Card", children: <EditProfile /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  return (
    <>
      <main className="content">
        <section className="cards"></section>
        <template id="cards-template">
          <li className="cards__item">
            <img
              src="#"
              alt="lixeira que representa que irá apagar o local selecionado"
              className="cards__trash"
            />
            <img src="#" alt="" className="cards__image" />
            <div className="cards__desc">
              <h2 className="cards__title"></h2>
              <img
                src="#"
                className="cards__like"
                alt="Um botão com um coração, simbolizando o curtir!"
              />
            </div>
          </li>
        </template>
        <div className="cards__zoom">
          <img
            src="#"
            alt="botão para fechar o formulário"
            className="cards__zoom-close popup__close"
          />
          <img src="#" alt="#" className="cards__zoom-image" />
          <h2 className="cards__zoom-title"></h2>
        </div>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}

export default Main;
