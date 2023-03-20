import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendar2Fill } from 'react-icons/bs';
import Like from "./components/Like";
import Message from "./Message";
import produce from "immer";

function App() {
  let items = ["Harare", "Bulawayo", "Hwange", "Victoria Falls", "Livingstone"];
  const [alertVisile, setArlertVisibility] = useState(false);
  const [isVisible, setVisibility]= useState(false)
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  })
  const [customer, setCustomer] = useState(
    {
      name: 'Novuyo',
      address:{
        city: 'Ranburg Johannesburg',
        zipCode: 2194,
      }
    }
  )

  const [tags, setTags] = useState(['happy', 'cheerful']);

const [bugs, setBugs] = useState([
  {id: 1, title: 'Bug 1', fixed: false},
  {id: 2, title: 'Bug 2', fixed: false},
]);





  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick= () => {
   const newDrink = {
    ...drink,
    price: 9,
   } 
   drink.price =6;
   setDrink({...drink, price: 20});
   setCustomer({...customer, address:{...customer.address, zipCode:2195}})

   //Add
   setTags([...tags,'exciting'])
   //Remove
   setTags(tags.filter(tag => tag !== 'happy'));
   //Update
   setTags(tags.map(tag => tag === 'happy' ? 'happiness': tag))

   
   setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug ))
   setBugs(produce(draft =>{
    const bug = draft.find(bug=> bug.id ===1);
    if(bug) bug.fixed = true;
   }))

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
       {drink.price}
       {customer.address.zipCode}
       {tags}
      {bugs.map(bug=> <p key={bug.id}>{bug.title} {bug.fixed? 'Fixed': 'New'}</p>)}
    </div>
  );
}

export default App;
