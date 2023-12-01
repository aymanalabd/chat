import express from "express";
import path from "path";



const app = express();
// settings
app.set("port",3000);
app.set("view engine","ejs");
app.set("views","src/views");
// static files
app.use(express.static(path.join(path.resolve(),"src","public")));
app.get("/home",(req,res,next)=>{

    res.render("home")

})
// starting the server
export default app;
