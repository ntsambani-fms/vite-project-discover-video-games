import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendar2Fill } from 'react-icons/bs';
import Like from "./components/Like";
import Message from "./Message";

function App() {
  let items = ["Harare", "Bulawayo", "Hwange", "Victoria Falls", "Livingstone"];

  const [alertVisile, setArlertVisibility] = useState(false);
  const [isVisible, setVisibility]= useState(false)


  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick= () => {
    setVisibility(true);
    console.log(isVisible)

  }

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
      <Button color= 'secondary' onClick={handleClick}>My Button</Button>
      <BsFillCalendar2Fill color="red" size={40}/>
      <Like onClick={()=> console.log('clicked')}/>
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;
