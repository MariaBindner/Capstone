import { Router } from "express";
import Order from "../models/order.js";
import Customer from "../models/customer.js";
import Ordersubmission from "../models/Ordersubmission.js";

const router = Router();

// Create a new order with customer, Ordersubmission, delivery and notes documents
router.post("/", async (request, response) => {
  const body = request.body;

  try {
    // Create and save the customer document in a seperate collection
    const customer = new Customer(body.customer);
    await customer.save();
  } catch (error) {
    console.log(`Error saving customer ${body.customer.name}`);
  }

  // Create a instance of the Order model so it can populated.
  const newOrder = new Order({});

  // Create and save the pizza documents in a seperate collection
  try {
    const OrdersubmissionIds = body.ordersubmissions.map(
      async Ordersubmission => {
        // Add the order ID and customer ID to each pizza for cross reference purposes
        const newOrdersubmission = new Ordersubmission({
          ...ordersubmission,
          order: newOrder._id,
          customer: customer._id
        });
        await newOrdersubmission.save();
        return newOrdersubmission._id;
      }
    );
  } catch (error) {
    console.log(`Error saving ordersubmissions`);
  }

  try {
    // Define the order using the above created IDs
    newOrder.ordersubmissions = ordersubmissionIds;
    newOrder.customer = customer._id;
    newOrder.notes = body.notes;
    newOrder.status = body.status;

    // Create and save the order document in a seperate collection
    const data = await newOrder.save();

    response.json(data);
  } catch (error) {
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    response.status(500).json(error.errors);
  }
});

// Retrieve a single order with the option to not populate the sub-documents

// Retrieve all orders with the option to not populate the sub-documents

// Remove a single order and it's sub-documents

// Update a single orders pizza, delivery and notes sub=documents

export default router;
