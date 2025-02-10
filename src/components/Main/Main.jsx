function Main() {
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
      </main>
    </>
  );
}

export default Main;
