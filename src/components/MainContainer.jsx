import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";
import Header from "./Header";

export default function MainContainer () {

  return (
    <section className="container">
      <Header />
      <main className="main">
        <List />
        <div className="sidebar main__sidebar">
          <AddItem />
          <ButtonContainer />
        </div>
      </main>
    </section>
  );
}  