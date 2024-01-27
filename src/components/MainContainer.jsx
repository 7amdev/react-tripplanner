import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";
import { INITIAL_ITEMS } from "../lib/constants";

export default function MainContainer ({ children }) {
  const [items, setItems] = useState(function () {
    return JSON.parse(localStorage.getItem('items')) || structuredClone(INITIAL_ITEMS);
  });

  const items_insert = function (item_name) {
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

    setItems([...items, new_item]);
  };

  const items_remove_by_id = function (item) {
    const items_updated = items.filter(function (p_item) {
      return p_item.id !== item.id 
    });

    setItems(items_updated);
  };
  
  const items_remove_all = function () {
    setItems([]);
  };


  const items_set_packed_by_id = function (id, value) {
    const items_updated = items.map(function (prev_item) {
      if (prev_item.id === id) 
        prev_item.packed = value;

      return prev_item;
    });

    setItems(items_updated);   
  };

  const items_set_all_packed = function () {
    const items_updated = items.map(function (item) {
      item.packed = true; 
      return item;
    });

    setItems(items_updated);   
  };

  const items_set_all_unpacked = function () {
    const items_updated = items.map(function (item) {
      item.packed = false; 
      return item;
    });
    
    setItems(items_updated);
  };

  const items_reset = function () {
    setItems(structuredClone(INITIAL_ITEMS));
  };

  const items_get_total_packed = items.reduce(function (initial_value, item) {
    if (item.packed) initial_value += 1;
    return initial_value;
  }, 0);

  useEffect(function () {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <header className="header header_secondary">
        <img src="" alt="logo" />
        <p className="header__info">
          <b>{ items_get_total_packed }</b> / { items.length } items packed
        </p>
      </header>
      <main className="main">
        <List 
          items={items}
          onDeleteItem={items_remove_by_id}
          onCheckItem={items_set_packed_by_id}
        />
        <div className="sidebar main__sidebar">
          <AddItem onAddItem={items_insert} />
          <ButtonContainer 
            setAllItemsPacked={items_set_all_packed}
            setAllItemsUnpacked={items_set_all_unpacked}
            resetItems={items_reset}
            removeAllItems={items_remove_all}
          />
        </div>
      </main>
    </>
  );
}  