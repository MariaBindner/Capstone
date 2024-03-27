import mongoose from "mongoose";

const OrdersubmissionSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  bread: {
    type: String,
    required: true,
    enum: ["regular-burger-bun", "no-bread-lettuce-wrap", "skinny-bread"]
  },
  cheese: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  protein: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  condiments: [String],
  sprinkles: [String],
  name: [String],
  allergies: [String],
  notes: [String]
});

const Ordersubmission = mongoose.model(
  "Ordersubmission",
  OrdersubmissionSchema
);

export default Ordersubmission;
