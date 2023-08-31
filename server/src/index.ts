import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import commentRoutes from "./routes/comments";
import postRoutes from "./routes/posts";

const path = require("path");
require("dotenv").config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
  //without this cors() function, we get cors policy error:  No 'Access-Control-Allow-Origin' header is present on the requested resource.
);

app.use(compression());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.json());

const server = http.createServer(app);

app.use("/", postRoutes);
app.use("/", commentRoutes);
// app.use(express.static("uploads")); // doesn't work
app.use("/uploads", express.static("uploads")); // works
const start = async () => {
  let isConnected = false; // Variable to track the connection status

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }
  try {
    if (!process.env.MONGO_STRING) return console.log("Missing MongoDB URL");
    await mongoose.connect(process.env.MONGO_STRING as string);
    isConnected = true; // Set the connection status to true
    server.listen(8080, () => {
      console.log("Server running on http://localhost:8080/");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
