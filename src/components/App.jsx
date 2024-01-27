import MainContainer from "./MainContainer";

export default function App() {
  console.log('rendering app...');
  return (
    <>   
      <h1 className="background-heading">Tripplanner</h1>
      <section className="container">
        <MainContainer />
      </section>
      <footer className="footer">
        <small className="footer__copyright">&copy; 2024 Copyright by Alfredom.</small>
        <small className="footer__version">Version 1.5</small>
      </footer>
    </>
  );
}
