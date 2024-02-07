import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`===>>>> Server start on PORT: ${port}`);
});

//------------------------------------------------------

app.get("/", (request, response) => {
  return response.status(200).json({ sucess: true, msg: "START EXPRESS API" });
});

//------------------------------------------------------
