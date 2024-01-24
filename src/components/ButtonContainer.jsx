export default function ButtonContainer ({ setAllItemsPacked, setAllItemsUnpacked }) {
  return (
    <section className="button-group">
      <button 
        className="button button_fs_14px button_mb_10px button_bc_lg"
        onClick={setAllItemsPacked}
      >
          Mark all as complete
      </button>
      <button 
        className="button button_fs_14px button_mb_10px button_bc_lg"
        onClick={setAllItemsUnpacked}
      >
          Mark all as incomplete
      </button>
      <button className="button button_fs_14px button_mb_10px button_bc_lg">Reset to initial</button>
      <button className="button button_fs_14px button_mb_10px button_bc_lg">Remove all items</button>
    </section>
  );
}