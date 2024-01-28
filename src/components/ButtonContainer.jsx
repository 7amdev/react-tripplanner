import { useItemsStore } from "../store/itemsStore";

export default function ButtonContainer () {
  const { 
    items_set_all_packed,
    items_set_all_unpacked,
    items_reset,
    items_remove_all
  } = useItemsStore(function (state) {
    return {
      items: state.items,
      items_set_all_packed: state.items_set_all_packed,
      items_set_all_unpacked: state.items_set_all_unpacked,
      items_reset: state.items_reset,
      items_remove_all: state.items_remove_all
    };
  });

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