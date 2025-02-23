export default function ImagePopup(props) {
  const { name, link } = props;
  // console.log(props);

  return (
    <>
      <img src={link} alt="" className="popup__zoom-image" />
      <h3 className="popup__zoom-title">{name}</h3>
    </>
  );
}
