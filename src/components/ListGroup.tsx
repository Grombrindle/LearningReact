// import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  items = [];

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List Group</h1>
  //         <p>There are no items in the list.</p>
  //       </>
  //     );

  //   items.map((item) => <li className="list-group-item">{item}</li>);

  //   const message =
  //     items.length === 0 ? <p>There are no items in the list.</p> : null;
  function GetMessage() {
    if (items.length === 0) return <p>There are no items in the list.</p>;
    return null;
  }
  return (
    // <Fragment>
    <>
      <h1>List Group</h1>
      {/* {GetMessage()} */}
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
