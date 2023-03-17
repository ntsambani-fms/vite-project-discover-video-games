import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Harare", "Bulawayo", "Hwange", "Victoria Falls", "Livingstone"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      </div>
      <div className="alert alert-primary">
        <Alert />
      </div>
    </div>
  );
}

export default App;
