export default function List ({ onSort, children }) {
  

  // const on_change_sort_by_handler = function (event) {
  //   onSort(event.value);
  // };

  // console.log('List rendering....');
  return (
    <ul className="list main__list">
      {children}
    </ul>
  );
}