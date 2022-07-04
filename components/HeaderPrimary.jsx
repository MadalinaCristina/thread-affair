export default function HeaderPrimary () {
  return (
  <section className="header-primary d-none d-lg-block">
    <nav className="nav-primary">
      <ul>
        <li>
          <a href="https://x.ro" title="Home">Home</a>
        </li>

        <li>
          <a href="https://x.ro" title="Costume">Costume</a>
        </li>

        <li>
          <a href="https://x.ro" title="Camasi">Camasi</a>
        </li>

        <li>
          <a href="https://x.ro" title="Accesorii">Accesorii</a>
        </li>
      </ul>

      <section className="nav-primary-button px-2">
        <ul>
          <li>
            <section className="nav-primary-button">
              <span className="animated-button">
                <div className="customize-button">
                  <i className="fa-solid fa-sliders"></i>

                  <span className="label">Customize your suit</span>
                </div>
              </span>
            </section>
          </li>
        </ul>
      </section>
    </nav>

    <nav className="nav-secondary">
      <ul>
        <li>
          <a href="https://x.ro" title="Glamour suits">Glamour suits</a>
        </li>

        <li>
          <a href="https://x.ro" title="Wedding suits">Wedding suits</a>
        </li>

        <li>
          <a href="https://x.ro" title="Office suits">Office suits</a>
        </li>

        <li>
          <a href="https://x.ro" title="Customize your suit">Customize your suit</a>
        </li>
      </ul>
    </nav>
  </section>
  );
}
