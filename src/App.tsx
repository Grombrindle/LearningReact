//BetterCLass
// ✅ BEST PRACTICE: Extract config/data to top-level or custom hook
// - Keeps component focused on UI logic
// - Makes data reusable/testable
// - Avoids re-creating arrays on every render
let ITEMS = [
  "An item",
  "A second item",
  "A third item",
  "A fourth item",
  "And a fifth one",
];

import { useState, useCallback } from "react"; // ✅ useCallback for stable handlers
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // ✅ camelCase for state (React convention)
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // ✅ useCallback prevents re-renders in child components
  // - ListGroup won't re-render unnecessarily
  // - Stable function reference across renders
  const handleSelectItem = useCallback((item: string) => {
    console.log(item);
  }, []);

  // ✅ Inline handler with useCallback - stable & performant
  const handleShowAlert = useCallback(() => {
    setIsAlertVisible(true);
  }, []);

  return (
    <>
      {/* ✅ Conditional rendering with && is fine for simple cases */}
      {/* Alternative: ternary for complex logic */}
      {isAlertVisible && (
        <Alert onClose={() => setIsAlertVisible(false)}>
          <strong>Hiiiiiiii</strong> hi! {/* ✅ Fixed JSX whitespace */}
        </Alert>
      )}

      {/* ✅ Props are properly typed (assuming ListGroup has types) */}
      <ListGroup
        items={ITEMS}
        heading="List Group"
        onSelectItem={handleSelectItem}
      />

      <Button color="secondary" onClick={handleShowAlert}>
        <span>My Button</span> {/* ✅ Semantic text */}
      </Button>
    </>
  );
}

export default App;

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// // import Message from './Message';
// function App() {
//   let items = [
//     "An item",
//     "A second item",
//     "A third item",
//     "A fourth item",
//     "And a fifth one",
//   ];
//   const [AlertVisible, setAlertVisible] = useState(false);
//   const handleSelectItem = (item: string) => console.log(item);
//   return (
//     <>
//       {/* <Alert message="hi" /> */}
//       {AlertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>
//           <span>Hiiiiiiii</span>hi{" "}
//         </Alert>
//       )}
//       <ListGroup
//         items={items}
//         heading="List Group"
//         onSelectItem={handleSelectItem}
//       />
//       <Button color="secondary" onClick={() => setAlertVisible(true)}>
//         <span>Click me</span>
//       </Button>
//     </>
//   );
// }

// export default App;
