import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

const ParentComponent = () => {
  let [itemName, setItemName] = useState("");
  let [itemPrice, setItemPrice] = useState("");
  let [displayListItems, setDisplayListItems] = useState([]);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setItemPrice(e.target.value);
  };
  const handleClick = () => {
    const newItem = {
      itemName:  itemName,
      itemPrice: itemPrice
    };
    setDisplayListItems([...displayListItems, newItem]);

    setItemName("");
    setItemPrice("");
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>
        Item Name:{" "}
        <input id="itemName" value={itemName} onChange={handleNameChange} type="text" /> Item
        price:{" "}
        <input id="itemPrice" value={itemPrice} onChange={handlePriceChange} type="number" />
      </p>
      <button onClick={handleClick}>Add Item</button>
      <ChildComponent
        displayListItems={displayListItems}
        setDisplayListItems={setDisplayListItems}
      />
    </div>
  );
};

const ChildComponent = ({ displayListItems, setDisplayListItems }) => {
  const handleRemoveClick = (index) => {
    const updatedList = displayListItems.filter((_, id) => id !== index);
    setDisplayListItems(updatedList);
  };
  return (
    <div className="child">
      <h1>Child Component</h1>
      {displayListItems.map((item, index) => (
          <li key={index}>
            {item.itemName} - ${item.itemPrice}
            <button onClick={() => handleRemoveClick(index)}>Remove</button>
          </li>
        ))}
    </div>
  );
};

export default App;
