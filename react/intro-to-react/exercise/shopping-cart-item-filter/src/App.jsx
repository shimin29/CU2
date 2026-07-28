import { useState } from "react";

// Test data - Do not modify
const items = [
    { id: 1, name: "T-shirt", price: 20, onSale: true },
    { id: 2, name: "Jeans", price: 50, onSale: false },
    { id: 3, name: "Socks", price: 5, onSale: true },
    { id: 4, name: "Hat", price: 15, onSale: false },
    { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
    const [showSale, setShowSale] = useState(false)
    const [renderItems, setRenderItems] = useState([...items])


    const changeView = () => {
      if(!showSale){
        setRenderItems(items.filter(item => item.onSale))
      }else{
        setRenderItems([...items])
      }
      setShowSale(!showSale)
    }

    // Your code here
    return <div>
      <h1>Shopping Cart</h1>
      <button onClick={changeView}>{ showSale ? "Show All Items" : "Show Sale Items Only"}</button>
      <ul>
        {renderItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>;
}

export default App;
