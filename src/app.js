import express from "express";
import path from "path";

const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// settings
app.set("port",3000);

// static files
app.use(express.static(path.join(path.resolve(), "public")));

// starting the server
export default app;
