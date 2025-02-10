export default function Card({ trash, like }) {
  return (
    <li className="cards__item">
      <img
        src={trash}
        alt="lixeira que representa que irá apagar o local selecionado"
        className="cards__trash"
      />
      <img src="#" alt="" className="cards__image" />
      <div className="cards__desc">
        <h2 className="cards__title"></h2>
        <img
          src={like}
          className="cards__like"
          alt="Um botão com um coração, simbolizando o curtir!"
        />
      </div>
    </li>
  );
}
