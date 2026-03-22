import ListGroup from "./components/ListGroup";
// import Message from './Message';
function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  return <ListGroup items={items} heading="List Group" />;
}

export default App;
