import mongoose from "mongoose";

const OrdersubmissionSchema = new mongoose.Schema({
  Customer / Order Placer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  bread: {
    type: String,
    required: true,
    enum: ["regular-burger-bun", "lettuce-wrap", "skinny-bread"]
  },
  cheese: {
    type: String,
    required: true
  },
  protein: {
    type: String,
    required: true
  },
  name: [String],
  allergies: [String],
  notes: [String],
  customizations: [String]
});
const Ordersubmission = mongoose.model(
  "Ordersubmission",
  OrdersubmissionSchema
);

export default Ordersubmission;
