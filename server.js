const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");

// Load environment variables
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

// Connect to the database
connectDb();

const app = express();
const port = process.env.PORT || 5050;

// Middleware setup
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route setup
app.use("/auth", require("./routes/authRoute"));
app.use("/users", require("./routes/userRoute"));
app.use("/products", require("./routes/productRoute"));
app.use("/carts", require("./routes/cartRoute"));

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
