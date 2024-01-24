import { useState } from "react"

import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";

const initial_items = [
  {
    id: 1,
    name: 'Good mood',
    packed: true
  },
  {
    id: 2,
    name: 'Passport',
    packed: false
  },
  {
    id: 3,
    name: 'Phone charger',
    packed: false
  },
];

export default function MainContainer () {
  const [items, setItems] = useState(initial_items);

  return (
    <main className="main">
      <List items={items} setItems={setItems} />
      <div className="sidebar main__sidebar">
        <AddItem setItems={setItems} />
        <ButtonContainer />
      </div>
    </main>
  );
} 