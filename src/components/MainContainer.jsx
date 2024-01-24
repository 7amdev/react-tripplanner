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

  const add_item_handler = function (item_name) {
    if (!item_name) return;

    const _id = items.reduce(function (initial_value, item) {
      if (initial_value > item.id) return initial_value;
      return item.id
    }, 0) + 1;

    const new_item = {
      id: _id,
      name: item_name,
      packed: false
    };

    setItems(function (previous_values) {
      return [...previous_values, new_item];
    });
  };

  const delete_item = function () {};

  return (
    <main className="main">
      <List items={items} setItems={setItems} />
      <div className="sidebar main__sidebar">
        <AddItem onAddItem={add_item_handler} />
        <ButtonContainer />
      </div>
    </main>
  );
} 