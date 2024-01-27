import { useContext, useMemo, useState } from "react";
import Select from "react-select";

import ListItem from "./ListItem";
import { SORT_OPTIONS } from "../lib/constants";
import { compare_fn_create } from "../lib/utils";
import { ItemsContext } from "../contexts/itemsContextProvider";

export default function List () {
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const {
    items, 
    items_remove_by_id, 
    items_set_packed_by_id
  } = useContext(ItemsContext);

  const sorted_items = useMemo(function () {
    return [...items].sort(compare_fn_create(sortBy.value))
  }, [items, sortBy]);

  return (
    <ul className="list main__list">
      <Select 
        className="list__sort" 
        defaultValue={sortBy}
        onChange={setSortBy}
        options={SORT_OPTIONS} 
      />
      {
        sorted_items.map(function (item) {
          return (
            <ListItem 
              key={item.id}
              item={item} 
              onDeleteItem={items_remove_by_id}
              onCheckItem={items_set_packed_by_id}
            />    
          )
        })
      }
    </ul>
  );
}