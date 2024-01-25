import { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import Select from "react-select";

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

const options = [
  { value: 'default', label: 'Sort by default' },
  { value: 'packed', label: 'Sort by packed' },
  { value: 'unpacked', label: 'Sort by unpacked' }
]

const compare_fn_create = function (sort_by_value) {
  return function (a, b) {
    if (sort_by_value === 'packed') {
      if (a.packed < b.packed) {
        return 1;
      } else if (a.packed > b.packed) {
        return -1;
      }  
  
      return 0;
    } else if (sort_by_value === 'unpacked') {
      if (a.packed < b.packed) {
        return -1;
      } else if (a.packed > b.packed) {
        return 1;
      }
  
      return 0;
    }
  
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    }              
  
    return 0;
  };
}; 


export default function App() {
  const [items, setItems] = useState(initial_items);
  const [sortBy, setSortBy] = useState(options[0]);

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
      return (
        [...previous_values, new_item]
        .sort(
          compare_fn_create(sortBy.value)
        )
      );
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

  const items_sort_by = function (option) {
    setSortBy(option);
    setItems(function (prev_items) {
      return prev_items.toSorted(compare_fn_create(option.value));
    }); 
  };

  const total_items_packed = items.reduce(function (initial_value, item) {
    if (item.packed) initial_value += 1;
    return initial_value;
  }, 0);

  return (
    <>   
      <h1 className="background-heading">Tripplanner</h1>
      <section className="container">
        <header className="header header_secondary">
          <img src="" alt="logo" />
          <p className="header__info">
            <b>{ total_items_packed }</b> / { items.length } items packed
          </p>
        </header>
        <main className="main">
          <List onSort={items_sort_by}>
            <Select 
              className="list__sort" 
              defaultValue={sortBy}
              onChange={items_sort_by}
              options={options} 
            />
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
      </section>
      <footer className="footer">
        <small className="footer__copyright">&copy; 2024 Copyright by Alfredom.</small>
        <small className="footer__version">Version 1.5</small>
      </footer>
    </>
  );
}
