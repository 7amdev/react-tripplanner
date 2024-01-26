import { useEffect, useState } from "react";

import { INITIAL_ITEMS, SORT_OPTIONS } from "../lib/constants";
import { compare_fn_create } from "../lib/utils"

import List from "./List";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";

export default function App() {
  const [items, setItems] = useState(function () {
    const data = JSON.parse(localStorage.getItem('items'));
    if (data.length > 0) return data;
    
    return structuredClone(INITIAL_ITEMS);
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
    setItems(function (previous_items) {
      return previous_items.filter(function (p_item) {
        return p_item.id !== item.id 
      });
    });
  };
  
  const items_remove_all = function () {
    setItems([]);
  };


  const items_set_packed_by_id = function (id, value) {
    setItems(function (previous_items) {
      return previous_items.map(function (prev_item) {
        if (prev_item.id === id) 
          prev_item.packed = value;

        return prev_item;
      });
    });   
  };

  const items_set_all_packed = function () {
    setItems(function (previous_items) {
      return previous_items.map(function (item) {
        item.packed = true; 
        return item;
      });
    });
  };

  const items_set_all_unpacked = function () {
    setItems(function (previous_items) {
      return previous_items.map(function (item) {
        item.packed = false; 
        return item;
      });
    });
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

  console.log('rendering app...');
  return (
    <>   
      <h1 className="background-heading">Tripplanner</h1>
      <section className="container">
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
      </section>
      <footer className="footer">
        <small className="footer__copyright">&copy; 2024 Copyright by Alfredom.</small>
        <small className="footer__version">Version 1.5</small>
      </footer>
    </>
  );
}
