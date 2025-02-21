export default function ImagePopup(props) {
  const { name, link } = props;
  // console.log(props);

  return (
    <>
      <img src={link} alt="" className="cards__zoom-image" />
      <h3 className="cards__zoom-title">{name}</h3>
    </>
  );
}
