import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { subCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    brand: "",
    material: "",
  });

  useEffect(() => {
    console.log("🛒 Fetching products for category:", subCategory);
    const fetchProducts = async () => {
      try {
        console.log("🔍 Fetching products for:", subCategory);
        const { data } = await axios.get(`/api/products?category=${encodeURIComponent(subCategory)}`);
        console.log("📦 Products received:", data);
        setProducts(data);
        setFilteredProducts(data); // Initially set all products
      } catch (error) {
        console.error("❌ API Error:", error.response ? error.response.data : error.message);
      }
    };

    fetchProducts();
  }, [subCategory]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    console.log("🔄 Applying filters:", filters);
    let filtered = [...products];

    // ✅ Price Filter
    if (filters.price) {
      const priceRange = filters.price.split("-").map(Number);
      if (priceRange.length === 2) {
        filtered = filtered.filter(
          (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
        );
      }
    }

    // ✅ Brand Filter (Case-insensitive)
    if (filters.brand) {
      filtered = filtered.filter(
        (product) => product.brand?.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    // ✅ Material Filter (Case-insensitive)
    if (filters.material) {
      filtered = filtered.filter(
        (product) => product.material?.toLowerCase() === filters.material.toLowerCase()
      );
    }

    console.log("🎯 Filtered Products:", filtered);
    setFilteredProducts(filtered);
  }, [filters, products]); // Runs when filters or products change

  return (
    <div className="container mt-4">
      <h2 className="text-center">{subCategory ? subCategory.toUpperCase() : "All Products"}</h2>

      <div className="row">
        <div className="col-md-3">
          <h5>Filters</h5>

          {/* Price Filter */}
          <div className="mb-3">
            <label className="form-label">Price Range</label>
            <select className="form-select" name="price" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="0-5000">₹0 - ₹5000</option>
              <option value="5000-15000">₹5000 - ₹15000</option>
              <option value="15000-30000">₹15000 - ₹30000</option>
              <option value="30000-50000">₹30000 - ₹50000</option>
            </select>
          </div>

          {/* Brand Filter */}
          <div className="mb-3">
            <label className="form-label">Brand</label>
            <select className="form-select" name="brand" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="IKEA">IKEA</option>
              <option value="Hometown">Hometown</option>
              <option value="Urban Ladder">Urban Ladder</option>
            </select>
          </div>

          {/* Material Filter */}
          <div className="mb-3">
            <label className="form-label">Material</label>
            <select className="form-select" name="material" onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Wood">Wood</option>
              <option value="Metal">Metal</option>
              <option value="Plastic">Plastic</option>
            </select>
          </div>
        </div>

        {/* Product Display */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-center">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
