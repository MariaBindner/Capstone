import { Router } from "express";
import Ordersubmission from "../models/Ordersubmission.js";

const router = Router();

// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newOrdersubmission = new Ordersubmission(request.body);

    const data = await newOrdersubmission.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all pizzas route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Ordersubmission.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single pizza by ID
router.get("/:id", async (request, response) => {
  // http://localhost:4040/pizzas/pizzaId
  try {
    const data = await Ordersubmission.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Remove a single pizza by ID
router.delete("/:id", async (request, response) => {
  // http://localhost:4040/pizzas/pizzaId
  try {
    const data = await Ordersubmission.findByIdAndRemove(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single pizza by ID
router.put("/:id", async (request, response) => {
  try {
    const foobar = request.body;

    const data = await Ordersubmission.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          bread: foobar.bread,
          cheese: foobar.cheese,
          protein: foobar.protein,
          customizations: foobar.customizations,
          name: foobar.name,
          allergies: foobar.allergies,
          notes: foobar.notes
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
