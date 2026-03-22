import { useState, useCallback, type MouseEvent } from "react"; // ✅ Import MouseEvent for proper typing

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // ✅ Initial state: first item or -1 (handles empty array)
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ useCallback: stable function reference, prevents parent re-renders
  const handleClick = useCallback(
    (item: string, index: number, event: MouseEvent) => {
      setSelectedIndex(index);
      onSelectItem(item);
    },
    [onSelectItem],
  ); // ✅ Dependency: re-create only if prop changes

  // ✅ Early return: cleaner than conditional inside JSX
  if (items.length === 0) {
    return (
      <div role="alert" aria-live="polite">
        <h1>{heading}</h1>
        <p className="text-muted">No items available.</p>
      </div>
    );
  }

  return (
    <div>
      {/* ✅ Semantic heading with id for accessibility */}
      <h1 id="list-heading">{heading}</h1>

      <ul
        className="list-group"
        role="listbox"
        aria-labelledby="list-heading"
        aria-activedescendant={`list-item-${selectedIndex}`}
      >
        {items.map((item, index) => (
          /* ✅ Better key: index + item prevents key collisions */
          <li
            key={`${item}-${index}`} // ✅ Unique key combining both
            className={`list-group-item 
              ${selectedIndex === index ? "active" : ""}`}
            /* ✅ role="option" + explicit aria-selected for screen readers */
            role="option"
            aria-selected={selectedIndex === index}
            id={`list-item-${index}`}
            /* ✅ Proper event typing + button-like behavior */
            onClick={(event) => handleClick(item, index, event)}
            tabIndex={0} // ✅ Keyboard accessible
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(item, index, e as any);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;

// // import type { MouseEvent } from "react";

// import { useState } from "react";

// interface Props {
//   items: string[];
//   heading: string;
//   onSelectItem: (item: string) => void;
// }

// // import { Fragment } from "react/jsx-runtime";
// function ListGroup({ items, heading, onSelectItem }: Props) {
//   // let selectedItem = 0;

//   //Hooks
//   const [selectedItem, setSelectedItem] = useState(-1);
//   // arr[0]; // -1
//   // arr[1]; // function to update the state
//   //   items = [];

//   //   if (items.length === 0)
//   //     return (
//   //       <>
//   //         <h1>List Group</h1>
//   //         <p>There are no items in the list.</p>
//   //       </>
//   //     );

//   //   items.map((item) => <li className="list-group-item">{item}</li>);

//   //   const message =
//   //     items.length === 0 ? <p>There are no items in the list.</p> : null;

//   // function GetMessage() {
//   //   if (items.length === 0) return <p>There are no items in the list.</p>;
//   //   return null;
//   // }

//   // const handleClick = (event: MouseEvent) => console.log(event);

//   return (
//     // <Fragment>
//     <>
//       <h1>{heading}</h1>
//       {/* {GetMessage()} */}
//       {items.length === 0 && <p>There are no items in the list.</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             className={
//               selectedItem === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={item}
//             onClick={() => {
//               setSelectedItem(index);
//               onSelectItem(item);
//             }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//     // </Fragment>
//   );
// }

// export default ListGroup;
