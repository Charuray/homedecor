import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
     // Explicit _id definition (Optional)
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    material: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    countInStock: { type: Number, required: true, default: 10 } // Default stock count
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema, "products"); // Ensuring correct collection

export default Product;
