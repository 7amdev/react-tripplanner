import { useContext } from "react";
import { ItemsContext } from "../contexts/itemsContextProvider";

export default function Header () {
  const {items, items_get_total_packed} = useContext(ItemsContext);

  return (
    <header className="header header_secondary">
      <img src="" alt="logo" />
      <p className="header__info">
        <b>{ items_get_total_packed }</b> / { items.length } items packed
      </p>
    </header>
  );
} 