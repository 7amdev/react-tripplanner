import { useEffect, useRef, useState } from "react";

export default function AddItem ({ onAddItem }) {
  const [item, setItem] = useState('');
  const input_el = useRef();

  useEffect(function () {
    input_el.current.focus();
  }, []);

  const on_submit_handler = function (event) {
    event.preventDefault();
    if (!item) {
      alert('Cannot insert empty value...');
      return;
    } 
    
    onAddItem(item);
    setItem('');
  };


  return (
    <form 
      action="#" 
      onSubmit={on_submit_handler} 
      className="form form_add-item"
    >
      <input 
        ref={input_el}
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