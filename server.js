import express from "express";
import router from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
// app.use(cors);
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// User routes
app.use("/users", router);

app.all("*", (req, res) => {
  res.status(400).json({
    status: "failed",
    message: `Page not found =>${req.originalUrl}`,
  });
});

// Setting up server
app.listen(PORT,'0.0.0.0',(req, res) => {
  console.log(`Server up and running on Port:${PORT}`);
});
