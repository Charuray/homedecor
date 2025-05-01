import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/ProductModel.js"; // Ensure correct path
import { products } from "./data/products.js"; // Named import

dotenv.config();

const seedDatabase = async () => {
  try {
    console.log("🔗 Connecting to:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // Clear existing products
    const deleted = await Product.deleteMany();
    console.log(`🗑 Deleted Products: ${deleted.deletedCount}`);

    // Insert new products
    const inserted = await Product.insertMany(products);
    console.log(`✅ Inserted Products: ${inserted.length}`);

    process.exit();
  } catch (err) {
    console.error("❌ DB Connection Error:", err);
    process.exit(1);
  }
};

seedDatabase();
