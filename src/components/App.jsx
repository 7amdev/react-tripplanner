import { useState } from "react";

import { INITIAL_ITEMS, SORT_OPTIONS } from "../lib/constants";
import { compare_fn_create } from "../lib/utils"

import List from "./List";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import Select from "react-select";

export default function App() {
  const [items, setItems] = useState(structuredClone(INITIAL_ITEMS));
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

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

    setItems(function (previous_values) {
      return (
        [...previous_values, new_item]
        .sort(
          compare_fn_create(sortBy.value)
        )
      );
    });
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

  const items_sort_by = function (value) {
    setItems(function (prev_items) {
      return prev_items.toSorted(compare_fn_create(value));
    }); 
  };

  const on_sort_handler = function (option) {
    setSortBy(option);
    items_sort_by(option.value);
  };

  const items_get_total_packed = items.reduce(function (initial_value, item) {
    if (item.packed) initial_value += 1;
    return initial_value;
  }, 0);

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
          <List>
            <Select 
              className="list__sort" 
              defaultValue={sortBy}
              onChange={on_sort_handler}
              options={SORT_OPTIONS} 
            />
            <ListItem 
              items={items} 
              setItems={setItems}
              onDeleteItem={items_remove_by_id}
              onCheckItem={items_set_packed_by_id}
            />    
          </List>
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
