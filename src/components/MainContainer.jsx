import { useState } from "react"

import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";
import ListItem from "./ListItem";

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

  const delete_item_handler = function (item) {
    setItems(function (previous_items) {
      return previous_items.filter(function (p_item) {
        return p_item.id !== item.id 
      });
    });
  };
   
  const set_all_items_packed = function () {
    setItems(function (previous_items) {
      return previous_items.map(function (item) {
        item.packed = true; 
        return item;
      });
    });
  };

  const set_all_items_unpacked = function () {
    setItems(function (previous_items) {
      return previous_items.map(function (item) {
        item.packed = false; 
        return item;
      });
    });
  };

  const reset_items = function () {
    setItems(initial_items);
  };

  const remove_all_items = function () {
    setItems([]);
  };

  return (
    <main className="main">
      <List>
        <ListItem 
          items={items} 
          setItems={setItems}
          onDeleteItem={delete_item_handler}
        />    
      </List>
      <div className="sidebar main__sidebar">
        <AddItem onAddItem={add_item_handler} />
        <ButtonContainer 
          setAllItemsPacked={set_all_items_packed}
          setAllItemsUnpacked={set_all_items_unpacked}
          resetItems={reset_items}
          removeAllItems={remove_all_items}
        />
      </div>
    </main>
  );
}  