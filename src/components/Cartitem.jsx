import React from "react";
import { GoTrashcan } from "react-icons/go";

export const CartItem = ({ wish, removeFromCartHandler, updateCartItem }) => {

  const calculateNewWishTotal = (wish) => {
    return wish.points * wish.quantity;
  };

  const style = {
    mainContainer: `container flex flex-col w-4/5 justify-between items-center py-3 mx-auto border-b-2 border-gray-600`,
    spanBoxOne: `container flex justify-between py-2`,
    headingOne: `text-left text-lg`,
    button: `text-2xl text-red-600`,
    spanBoxTwo: `container flex justify-between my-auto`,
    selectInput: `border-2 border-gray-600 rounded ml-2`,
    headingTwo: `text-md`,
  };

  return (
    <div key={wish.id} className={style.mainContainer}>
      <span className={style.spanBoxOne}>
        <h2 className={style.headingOne}>Wish: {wish.title}</h2>
        <button
          onClick={() => removeFromCartHandler(wish)}
          className={style.button}
        >
          <GoTrashcan />
        </button>
      </span>
      <span className={style.spanBoxTwo}>
        <span>
          <label htmlFor="wishQuantity">Quantity:</label>
          <select 
            id="wishQuantity"
            className={style.selectInput}
            value={wish.quantity}
            onChange={(e) => updateCartItem({...wish, quantity: Number(e.target.value)})}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>
        <span>
          <h2 className={style.headingTwo}>ChoreBucks: 💰{calculateNewWishTotal(wish)}</h2>
        </span>
      </span>
    </div>
  );
}

export default CartItem;