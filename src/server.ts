// connect database here
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = 4000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    // run the server here
    app.listen(port, () => {
      console.log("server is running");
    });
  })
  .catch((error: Error) => {
    console.log("MongoBD connection error");
    process.exit(1);
  });
