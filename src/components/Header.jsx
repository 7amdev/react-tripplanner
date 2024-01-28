import { useItemsStore } from "../store/itemsStore";

export default function Header () {

  const items = useItemsStore(function (state) {
    return state.items;
  });

  const items_get_total_packed = items.reduce(function (total, item) {
    if (item.packed) total += 1;
    return total;
  }, 0);

  return (
    <header className="header header_secondary">
      <img src="" alt="logo" />
      <p className="header__info">
        <b>{ items_get_total_packed }</b> / { items.length } items packed
      </p>
    </header>
  );
}