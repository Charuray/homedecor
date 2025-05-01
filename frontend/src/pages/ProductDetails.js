import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import axios from "axios";
import { FaCartPlus, FaBolt, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
const apiUrl = process.env.REACT_APP_API_URL;
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error.response?.data || error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    setAddedToWishlist(true);
    setTimeout(() => setAddedToWishlist(false), 3000);
  };

  if (!product) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Alert Messages */}
      {addedToCart && (
        <div className="alert alert-success text-center" role="alert">
          ✅ {product.name} added to cart!
        </div>
      )}
      {addedToWishlist && (
        <div className="alert alert-info text-center" role="alert">
          💖 {product.name} added to wishlist!
        </div>
      )}

      <div className="row">
        {/* Left Side - Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            className="img-fluid rounded shadow"
            alt={product.name}
            style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.brand}</p>

          {/* Ratings */}
          <div className="mb-2">
            <span className="text-warning">
              <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaStarHalfAlt />
            </span>
            <span className="text-muted ms-2">4.3 (120 reviews)</span>
          </div>

          {/* Price */}
          <h3 className="text-danger">₹{product.price.toLocaleString("en-IN")}</h3>

          {/* EMI Options */}
          <p className="text-success">
            <strong>EMI starts at ₹{Math.round(product.price / 12)} per month</strong>
          </p>

          {/* Delivery Info */}
          <p className="text-primary"><strong>Free Delivery in 5-7 Days</strong></p>

          {/* Buttons */}
          <div className="mt-3">
            <button className="btn btn-warning me-2" onClick={handleAddToCart} disabled={product.stock === 0}>
              <FaCartPlus /> Add to Cart
            </button>
            <button className="btn btn-success">
              <FaBolt /> Buy Now
            </button>
            <button className="btn btn-outline-danger ms-2" onClick={handleAddToWishlist}>
              <FaHeart /> Wishlist
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-4">
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mt-5">
        <h4>Specifications</h4>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td><strong>Brand</strong></td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td><strong>Material</strong></td>
              <td>{product.material}</td>
            </tr>
            <tr>
              <td><strong>Category</strong></td>
              <td>{product.category}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Customer Reviews */}
      <div className="mt-5">
        <h4>Customer Reviews</h4>
        <div className="border p-3">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStarHalfAlt className="text-warning" />
            <span className="ms-2 fw-bold">4.5</span>
          </div>
          <p className="text-muted">"Great product! High quality and well-designed. Highly recommend!"</p>
          <hr />
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <span className="ms-2 fw-bold">5.0</span>
          </div>
          <p className="text-muted">"Absolutely love it! Worth every penny."</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
