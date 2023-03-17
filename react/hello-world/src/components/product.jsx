import { useState } from "react";

const Product = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>      <span className="m-2 text-info">laptop</span>
      <span className="m-2 badge bg-primary">{format()}</span></div>
    <div><button onClick={handleIncrement} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={handleDecrement} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button onClick={handleDelete} className="m-2 btn btn-sm btn-danger">
        delete
      </button></div>
      
    </>
  );

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleDelete() {
    setCount(count = 0);
  }

  function format() {
    if (count === 0) {
      return "zero";
    } else {
      return count;
    }
  }
};

export default Product;