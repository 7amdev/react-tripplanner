import { useState } from "react";

export default function AddItem ({  setItems }) {
  const [item, setItem] = useState('');


  const on_submit_handler = function (event) {
    event.preventDefault();

    setItems(function (previous_values) {
      const _id = previous_values.reduce(function (initial_value, item) {
        if (initial_value > item.id) return initial_value;
        return item.id
      }, 0) + 1;

      const new_value = {
        id: _id,
        name: item,
        packed: false
      };

      return [...previous_values, new_value];
    });
  };

  return (
    <form 
      action="#" 
      onSubmit={on_submit_handler} 
      className="form form_add-item"
    >
      <input 
        type="text" 
        className="input form__input" 
        placeholder="Toothbrush" 
        value={item}
        onChange={function (event) {
          setItem(event.target.value);
        }}
      />
      <button className="button form__submit">
        Add to list
      </button>
    </form>
  );
}