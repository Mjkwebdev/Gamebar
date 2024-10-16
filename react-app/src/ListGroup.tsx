function ListGroup() {
  const list = ["Tokyo"];
  return (
    // Fragments
    <>
      <h2>List</h2>
      {list.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {list.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
