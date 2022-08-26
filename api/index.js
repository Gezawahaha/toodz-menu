const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require('cors');


const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const menuRoute = require("./routes/menus");
const dummenuRoute = require("./routes/dummymenu");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
})
.then(() => console.log("DB Conection Succesful"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/menus", menuRoute);
app.use("/api/dummenu", dummenuRoute);

app.listen(8800, () => {
    console.log("Backend Conection Succesful")
})