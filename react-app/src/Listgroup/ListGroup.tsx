import { useState } from "react";
import "./listGroup.css";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background-color: ${Props => Props.active ? "blue": "none"};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // Fragments
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p> No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
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
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
