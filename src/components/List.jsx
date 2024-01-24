import Select from "react-select";

const options = [
  { value: 'chocolate', label: 'Sort by default' },
  { value: 'strawberry', label: 'Sort by packed' },
  { value: 'vanilla', label: 'Sort by unpacked' }
]

export default function List ({ children }) {

  return (
    <ul className="list main__list">
      <Select 
        className="list__sort" 
        options={options} 
        value={options[0]}
      />
      {children}
    </ul>
  );
}