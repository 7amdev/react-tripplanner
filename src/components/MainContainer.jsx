import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";
import { INITIAL_ITEMS } from "../lib/constants";
import { useItemsStore } from "../store/itemsStore";

export default function MainContainer () {
  const { 
    items,
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

  const items_get_total_packed = items.reduce(function (total, item) {
    if (item.packed) total += 1;
    return total;
  }, 0);

  return (
    <>
      <header className="header header_secondary">
        <img src="" alt="logo" />
        <p className="header__info">
          <b>{ items_get_total_packed }</b> / { items.length } items packed
        </p>
      </header>
      <main className="main">
        <List />
        <div className="sidebar main__sidebar">
          <AddItem />
          <ButtonContainer 
            setAllItemsPacked={items_set_all_packed}
            setAllItemsUnpacked={items_set_all_unpacked}
            resetItems={items_reset}
            removeAllItems={items_remove_all}
          />
        </div>
      </main>
    </>
  );
}  