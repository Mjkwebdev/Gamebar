import { useState } from "react";
import './listGroup.css'; 
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Fragments
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p> No item found</p>}
      <ul className="listGroup">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
