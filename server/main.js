import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import cors from "cors";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

// Route

app.use("/user", authRouter);

// GLOBAL ERROR

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// SERVER

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is successfully running on the port ${process.env.PORT}`);
});
