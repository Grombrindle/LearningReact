import Alert from "./components/Alert";
import Button from "./components/Button";
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

  const handleSelectItem = (item: string) => console.log(item);
  return (
    <>
      {/* <Alert message="hi" /> */}
      <Alert>
        <span>Hiiiiiiii</span>hi{" "}
      </Alert>
      <ListGroup
        items={items}
        heading="List Group"
        onSelectItem={handleSelectItem}
      />
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        <span>Click me</span>
      </Button>
    </>
  );
}

export default App;
