const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const striperoutes = require("./routes/stripe-routes");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe", striperoutes);
app.listen(5000, () => {
  console.log("Listning on port 5000");
});
