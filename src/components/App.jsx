import ItemsContextProvider from "../contexts/itemsContextProvider";
import Header from "./Header";
import List from "./List";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";

export default function App() {
  console.log('rendering app...');
  return (
    <>   
      <h1 className="background-heading">Tripplanner</h1>
      <section className="container">
        <ItemsContextProvider>
          <Header />
          <main className="main">
            <List />
            <div className="sidebar main__sidebar">
              <AddItem />
              <ButtonContainer />
            </div>
          </main>
        </ItemsContextProvider>        
      </section>
      <footer className="footer">
        <small className="footer__copyright">&copy; 2024 Copyright by Alfredom.</small>
        <small className="footer__version">Version 1.5</small>
      </footer>
    </>
  );
}
