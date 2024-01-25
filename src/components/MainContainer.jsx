import AddItem from "./AddItem";
import ButtonContainer from "./ButtonContainer";
import List from "./List";
import ListItem from "./ListItem";

export default function MainContainer ({ items, setItems }) {
  return (
    <main className="main">
      <List>
        <ListItem 
          items={items} 
          setItems={setItems}
          onDeleteItem={delete_item_handler}
        />    
      </List>
      <div className="sidebar main__sidebar">
        <AddItem onAddItem={add_item_handler} />
        <ButtonContainer 
          setAllItemsPacked={set_all_items_packed}
          setAllItemsUnpacked={set_all_items_unpacked}
          resetItems={reset_items}
          removeAllItems={remove_all_items}
        />
      </div>
    </main>
  );
}  