const express= require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(helmet());

const home = require("./src/routes/home.routes");
const checkout = require("./src/routes/checkout.routes");
app.use("/api/v1", home);
app.use("/api/v1", checkout);


app.get("/",(req,res) => {
 res.send("API is working...");
});

app.listen(process.env.PORT || 8000, () =>{
    console.log("server is running on port 8000");
});

/*app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});*/

