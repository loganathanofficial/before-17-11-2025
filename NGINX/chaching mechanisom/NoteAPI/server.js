const Express = require('express');
const CustomError = require('./utils/CustomError')
const errorHandlingController= require("./controllers/ErrorHandlingController")
const os = require('os');

const app = Express();

const router = require("./controllers/RouterControllers");

app.use("/note",router);
app.get('/', (req, res) => {
    // os.hostname() returns the Docker container ID
    res.send(`Hello from **Container ID**: ${os.hostname()}!`);
});
app.use('/{*splat}',(req,res,next)=>{
    const err = new CustomError("no endpoint found",404);
    next(err);
    
})
app.use(errorHandlingController);
app.listen(8080, () => {
    console.log("Note API is running on port 8080");
}); 
