export default function EditAvatar() {
  return (
    <form className="popup__form form" id="avatar-form" noValidate>
      <fieldset className="form__input-block">
        <input
          type="url"
          className="form__input"
          id="avatar-input"
          placeholder="Url da foto"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="form__error"></span>
      </fieldset>
      <button type="submit" className="form__submit" id="profile-submit">
        Salvar
      </button>
    </form>
  );
}
