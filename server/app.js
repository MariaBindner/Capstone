// 'Import' the Express module instead of http
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ordersubmissions from "./routers/ordersubmissions.js";

// Load environment variables from .env file
dotenv.config();

// Connect to mongodb atlas server
mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

// Initialize the Express application
const app = express();

function checkApiKey(request, response, next) {
  if ("apiKey" in request.query && request.query.apiKey.length > 0) {
    next();
  } else {
    response.status(401).json({ message: "Unauthorized" });
  }
}

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

// CORS Middleware
const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  // if you wanted to not have "*" in the origin
  // and instead return the original URL
  // const url = request.get("host");
  // response.setHeader("Access-Control-Allow-Origin", `${url}`);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
// app.use(checkApiKey);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

// Handle the request with HTTP GET method with query parameters and a url parameter
app.get("/holidays", (request, response) => {
  // Express adds a "params" Object to requests that has an matches parameter created using the colon syntax
  const holidays = request.params.holidays;
});
// app.use("/holidays", holidays);

app.use("/ordersubmission", ordersubmissions);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
