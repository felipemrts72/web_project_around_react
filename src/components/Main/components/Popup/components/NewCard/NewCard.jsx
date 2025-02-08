export default function NewCard() {
  return (
    <form className="popup__form form" id="cards-form" noValidate>
      <fieldset className="form__input-block">
        <input
          type="text"
          className="form__input"
          id="titulo"
          placeholder="Título"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="form__error"></span>
      </fieldset>
      <fieldset className="form__input-block">
        <input
          type="url"
          className="form__input"
          id="link"
          placeholder="Link de imagem"
          required
        />
        <span className="form__error"></span>
      </fieldset>
      <button type="submit" id="add-submit" className="form__submit">
        Criar
      </button>
    </form>
  );
}
