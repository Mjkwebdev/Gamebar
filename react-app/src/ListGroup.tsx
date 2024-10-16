import { MouseEvent } from "react";
function ListGroup() {
  const list = ["tokyo", "Australia", "Washington DC"];
  const handleClick = (event: MouseEvent) => console.log(event);
  
  return (
    // Fragments
    <>
      <h2>List</h2>
      {list.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
