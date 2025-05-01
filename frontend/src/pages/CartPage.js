import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, clearCart } from "../redux/slices/cartSlice"; // ✅ Use correct function name
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || []; // ✅ Ensure cartItems is always an array

  // ✅ Prevent "undefined" error in reduce function
  const totalAmount = cartItems.length > 0
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="container mt-4">
      <h2>Shopping Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <h4>Your cart is empty!</h4>
          <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-3 text-center">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ maxWidth: "100px", height: "auto" }} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="text-muted">₹{item.price.toLocaleString("en-IN")}</p>

                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-sm btn-outline-primary me-2" 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))} // ✅ Prevents negative quantity
                        >-</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-primary ms-2" 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        >+</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-end pe-3">
                    <p className="text-danger fw-bold">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>Order Summary</h5>
              <p><strong>Total Items:</strong> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
              <h4>Total: ₹{totalAmount.toLocaleString("en-IN")}</h4>
              <button className="btn btn-success w-100 my-2">Proceed to Checkout</button>
              <button className="btn btn-outline-danger w-100" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
