import { useState } from "react";
import Select from "react-select";

import ListItem from "./ListItem";
import { SORT_OPTIONS } from "../lib/constants";
import { compare_fn_create } from "../lib/utils";

export default function List ({ 
  items,
  onDeleteItem,
  onCheckItem
}) {
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

  const sorted_items = [...items].sort(compare_fn_create(sortBy.value));

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
              onDeleteItem={onDeleteItem}
              onCheckItem={onCheckItem}
            />    
          )
        })
      }
    </ul>
  );
}