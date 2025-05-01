import express from "express";
import Product from "../models/ProductModel.js";

const router = express.Router();

// ✅ Fetch products by category (Existing Logic)
router.get("/", async (req, res) => {
  try {
    const category = req.query.category || "";
    console.log("📌 Received Category:", category);

    let query = {};
    if (category) query = { category: { $regex: new RegExp(`^${category}$`, "i") } };

    const products = await Product.find(query);
    console.log("📦 Products Found:", products.length);
    res.json(products);
    
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Fetch a single product by ID (Added)
router.get("/:id", async (req, res) => {
  try {
    console.log("🔍 Fetching Product ID:", req.params.id);

    const product = await Product.findById(req.params.id);

    if (!product) {
      console.log("❌ Product not found for ID:", req.params.id);
      return res.status(404).json({ message: "Product not found" });
    }

    console.log("✅ Product Found:", product);
    res.json(product);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
