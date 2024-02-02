import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function ButtonContainer () {
  const {
    items_set_all_packed, 
    items_set_all_unpacked,
    items_reset,
    items_remove_all
  } = useContext(ItemsContext);

  return (
    <section className="button-group">
      <button 
        className="button button_fs_14px button_mb_10px button_bc_lg"
        onClick={items_set_all_packed}
      >
          Mark all as complete
      </button>
      <button 
        className="button button_fs_14px button_mb_10px button_bc_lg"
        onClick={items_set_all_unpacked}
      >
          Mark all as incomplete
      </button>
      <button 
        className="button button_fs_14px button_mb_10px button_bc_lg"
        onClick={items_reset}
      >
          Reset to initial
      </button>
      <button 
        className="button button_fs_14px button_mb_10px button_bc_lg"
        onClick={items_remove_all}
      >
        Remove all items
      </button>
    </section>
  );
}