export default function List ({ onSort, children }) {
  return (
    <ul className="list main__list">
      {children}
    </ul>
  );
}