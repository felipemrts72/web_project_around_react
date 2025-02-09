export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup" id="info-update">
      <button
        aria-label="Close modal"
        className="popup__close"
        type="button"
        onClick={onClose}
      />
      <div className="popup__block">
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
