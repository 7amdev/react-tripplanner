import { useState } from "react";

export default function AddItem ({ onAddItem }) {
  const [item, setItem] = useState('');


  const on_submit_handler = function (event) {
    event.preventDefault();

    onAddItem(item);
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