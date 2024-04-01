import mongoose from "mongoose";
import delivery from "./delivery.js";
import note from "./note.js";

// Demonstrate linking vs embedding
const orderSchema = new mongoose.Schema({
  pizzas: [{ type: Schema.Types.ObjectId, ref: "Pizza" }],
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  delivery: delivery.schema,
  notes: [note.schema]
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
