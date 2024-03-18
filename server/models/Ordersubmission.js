import mongoose from "mongoose";

const ordersubmissionSchema = new mongoose.Schema({
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
  condiments: [String]
  sprinkles: [string]
  name: [string]
  allergies: [string]
  notes: [string]
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Ordersubmission" }
});

const Ordersubmission = mongoose.model("Ordersubmission", ordersubmissionSchema);

export default Ordersubmission;
