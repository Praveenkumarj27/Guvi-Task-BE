const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
dotenv.config();

app.use(cors({
    origin:"*"
}));

mongoose.set('strictQuery', true)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json());
  app.get("/",function (req, res,next){
    res.send(`Server Running Sucessfully`)
  }
  
)



app.use("/", authRoutes);


  app.listen(process.env.PORT || 8080 , ()=>{
    console.log(`Backend server running`);
  })