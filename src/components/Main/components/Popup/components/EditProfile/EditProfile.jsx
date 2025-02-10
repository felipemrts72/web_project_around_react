export default function EditProfile() {
  return (
    <form className="popup__form form" id="profile-form" noValidate>
      <fieldset className="form__input-block">
        <input
          type="text"
          className="form__input"
          id="name-input"
          placeholder="Nome"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="form__error"></span>
      </fieldset>
      <fieldset className="form__input-block">
        <input
          type="text"
          className="form__input"
          id="about-input"
          placeholder="Sobre mim"
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
