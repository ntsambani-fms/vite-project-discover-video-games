import { useState } from "react";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import NavBar from "./components/NavBar";


function App() {

  const [cartItems, setCartItems]= useState(['Product1','Product2'])

  const [game, setGame]= useState(
    {
      id: 1,
      player:{
        name:'John'
      },
    });

    const [pizza, setPizza] = useState({
      name: 'Spicy Pepperoni',
      toppings: ['Mushroom']
    })

    const [cart, setCart] = useState({
      discount: .1,
      items:[
        {id: 1, title: 'Product1', quantity: 1},
        {id: 2, title: 'Product2', quantity: 1}
      ]
    })

    const handleClick= () =>{
      setGame({...game, player: {...game,name: 'Novuyo'}});

      setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']})

      setCart({...cart, items: cart.items.map(item=> item.id === 1 ?  {...item, quantity: item.quantity +1} : item)})
    }

  return (
    <div>
     <NavBar cartItemsCount={cartItems.length} />
     <Cart cartItems={cartItems} onClear={()=> setCartItems([])}/>
 <ExpandableText>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque velit quasi rerum consectetur perferendis voluptatem asperiores, facilis amet atque recusandae id illo dolore laborum saepe facere nisi ad quisquam ducimus labore nulla illum beatae unde minima. Repudiandae quam dicta dolorum non temporibus alias iusto cupiditate reiciendis rem harum perferendis voluptates soluta voluptatem tenetur libero, asperiores consectetur expedita fugit. Nostrum temporibus ex minus quia rerum velit beatae maiores assumenda adipisci corporis aliquam ducimus, quas dicta enim quam animi vitae veniam nisi amet. Exercitationem explicabo architecto earum quod sapiente impedit qui aspernatur veritatis voluptas modi. Sint quos, assumenda sunt deserunt ipsum blanditiis.
 </ExpandableText>
    </div>
  );
}

export default App;
