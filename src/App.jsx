import { useState } from "react";
import logo from "./images/logo.png";
import editButton from "./images/Edit_Button.png";
import addLocal from "./images/Add_Button.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
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
              />
            </div>
            <div className="header__profile-edit">
              <div className="header__wrap">
                <h1 className="header__title">Jacques Costeau</h1>
                <img
                  src={editButton}
                  className="header__edit-button"
                  alt="Um botão com uma canela, simbolizando a edição!"
                />
              </div>
              <p className="header__subtitle">Explorador</p>
            </div>
            <img
              src={addLocal}
              className="header__add"
              alt="Um botão com um simbolo de mais, simbolizando a adição de mais fotos!"
            />
          </div>
        </header>
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
        </main>
        <footer className="footer">
          &copy;Felipe Menezes, 2024 Around The U.S.
        </footer>
      </div>
    </>
  );
}

export default App;
