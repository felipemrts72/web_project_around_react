function Header({ logo, editButton, addLocal }) {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={logo}
          alt="Logo do site, ao logo dos estados unidos"
          className="header__logo-item"
        />
      </div>
      <div className="header__profile">
        <div className="header__avatar-edit">
          <img
            src="#"
            alt="Foto de perfil do usuário"
            className="header__avatar"
          />
        </div>
        <div className="header__profile-edit">
          <div className="header__wrap">
            <h1 className="header__title">Jacques Costeau</h1>
            <img
              src={editButton}
              className="header__edit-button"
              alt="Um botão com uma canela, simbolizando a edição!"
            />
          </div>
          <p className="header__subtitle">Explorador</p>
        </div>
        <img
          src={addLocal}
          className="header__add"
          alt="Um botão com um simbolo de mais, simbolizando a adição de mais fotos!"
        />
      </div>
    </header>
  );
}

export default Header;
