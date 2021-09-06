import express from "express";
import router from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
        cors({
        origin:"http://127.0.0.1:5000/",
        })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", router);
// User routes

app.all("*", (req, res) => {
  res.status(400).json({
    status: "failed",
    message: `Page not found =>${req.originalUrl}`,
    anotherMessage:`Juz kidding Welome Kiddo API TESTING 101`
  });
});

// Setting up server
app.listen(PORT,'0.0.0.0',(req, res) => {
  console.log(`Server up and running on Port:${PORT}`);
});
