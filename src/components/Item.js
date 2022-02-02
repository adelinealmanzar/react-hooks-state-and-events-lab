import React, { useState } from "react";

function Item({ name, category }) {
  const [ isAdded, setAddition ] = useState(false)

  function handleClick() {
    setAddition(isAdded => !isAdded)
  }

  const className = isAdded ? "in-cart" : ""



  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isAdded ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
