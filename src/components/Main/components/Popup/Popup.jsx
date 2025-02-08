export default function Popup(props) {
  const { title, children } = props;
  return (
    <div className="popup" id="info-update">
      <button aria-label="Close modal" className="popup__close" type="button" />
      <div className="popup__block">
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
