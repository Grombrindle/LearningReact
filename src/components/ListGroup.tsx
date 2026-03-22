// import type { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

// import { Fragment } from "react/jsx-runtime";
function ListGroup({ items, heading }: Props) {
  // let selectedItem = 0;

  //Hooks
  const [selectedItem, setSelectedItem] = useState(-1);
  // arr[0]; // -1
  // arr[1]; // function to update the state
  //   items = [];

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

  // function GetMessage() {
  //   if (items.length === 0) return <p>There are no items in the list.</p>;
  //   return null;
  // }

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {/* {GetMessage()} */}
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
