const Express = require('express');
const CustomError = require('./utils/CustomError')
const globalErrorHandling= require("./controllers/globalErrorHandling")
const dotenv =require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;


const app = Express();

const noteRouter = require("./controllers/RouterControllers");

app.use("/api/v2/notes",noteRouter);

app.get("/", (req, res) => {
    console.log("running");
    res.send("i am note api working fine");
})
app.use('/{*splat}',(req,res,next)=>{
    const err = new CustomError("no endpoint found",404);
    next(err);
    
})
app.use(globalErrorHandling);
app.listen(PORT,()=>{
    console.log(`note api is running on port http://localhost:${PORT} `); 

});