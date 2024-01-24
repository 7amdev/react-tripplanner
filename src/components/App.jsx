import MainContainer from "./MainContainer";

export default function App() {
  return (
    <>   
      <h1 className="background-heading">Tripplanner</h1>
      <section className="container">
        <header className="header header_secondary">
          <img src="" alt="logo" />
          <p className="header__info"><b>1</b> / 3 items packed</p>
        </header>
        <MainContainer />
      </section>
      <footer className="footer">
        <small className="footer__copyright">&copy; 2024 Copyright by Alfredom.</small>
        <small className="footer__version">Version 1.5</small>
      </footer>
    </>
  );
}
