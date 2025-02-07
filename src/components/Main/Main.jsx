function Main() {
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
      </main>{" "}
    </>
  );
}

export default Main;
