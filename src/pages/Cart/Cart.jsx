import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import { getCart, placeOrder } from "../../apis";

const CartPage = () => {
  const {
    state: { userDetails, cart: cartData },
    dispatch,
  } = useContext(AppContext);

  const handlePlaceOrder = async () => {
    try {
      const cart = await placeOrder(cartData.id);
      dispatch({ type: "load_cart", payload: null });
      alert(cart.message);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cart = await getCart(userDetails.phoneNumber);
        dispatch({ type: "load_cart", payload: cart });
      } catch (e) {
        alert(e.message);
      }
    };
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cartData) {
    return "";
  }

  return (
    <div className="container mt-4">
      {/* {console.log(state)} */}
      <h1>Shopping Cart</h1>
      <p>
        <strong>Phone Number:</strong> {cartData.phoneNumber}
      </p>
      <h2>Cart Items</h2>

      <div className="row">
        {cartData.items.map((item) => (
          <div className="col-md-4" key={item._id}>
            <div className="card mb-4" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className="card-text">
                  <strong>Quantity:</strong> {item.qty}
                </p>
                <p className="card-text">
                  <strong>Restaurant ID:</strong> {item.restrauntId}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Total: ${cartData.total.toFixed(2)}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CartPage;
