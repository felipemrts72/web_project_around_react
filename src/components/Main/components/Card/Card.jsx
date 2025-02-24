import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
  const { name, link } = props.card;
  const { handleOpenPopup } = props;
  const imageComponent = {
    title: false,
    children: <ImagePopup card={props.card} />,
  };

  return (
    <li className="cards__item" key={props._id}>
      <img
        alt="lixeira que representa que irá apagar o local selecionado"
        className="cards__trash"
      />
      <img
        src={link}
        alt={`Foto do cartão, que mostra o ${name}`}
        className="cards__image"
        onClick={() => {
          handleOpenPopup(imageComponent);
        }}
      />
      <div className="cards__desc">
        <h2 className="cards__title">{name}</h2>
        <button
          className="cards__like"
          alt="Um botão com um coração, simbolizando o curtir!"
        />
      </div>
    </li>
  );
}
