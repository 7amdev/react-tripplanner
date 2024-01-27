import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";
import { INITIAL_ITEMS } from "../lib/constants";

export default function MainContainer ({ children }) {
  

  return (
    <>
      <header className="header header_secondary">
        <img src="" alt="logo" />
        <p className="header__info">
          <b>{ items_get_total_packed }</b> / { items.length } items packed
        </p>
      </header>
      <main className="main">
        <List 
          items={items}
          onDeleteItem={items_remove_by_id}
          onCheckItem={items_set_packed_by_id}
        />
        <div className="sidebar main__sidebar">
          <AddItem onAddItem={items_insert} />
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