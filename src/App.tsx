import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Harare", "Bulawayo", "Hwange", "Victoria Falls", "Livingstone"];

  const [alertVisile, setArlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisile &&<Alert onClose={()=>setArlertVisibility(false)}>
        Hello <span></span>Buhle
      </Alert>}
      <Button onClick={() => setArlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
