var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("node:fs/promises")

app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });

app.post("/storeItem",async (req,res)=>{
    console.log(req.method);
    console.log(req.body.cart);
    await fs.writeFile("./data/item_list.json",JSON.stringify(req.body.cart));
    res.status(200).json({"message":"Data Saved Successfully"});
})

app.get("/getItem",async (req,res)=>{
    itm_json = await fs.readFile("./data/item_list.json");
    itm_json = JSON.parse(itm_json)
    res.status(200).send(itm_json);
});

// app.get('*', function(req, res){
//     res.send('what???', 404);
//   });

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        console.log("line 38",req.method)
      return next();
    }
    console.log("line 23",req.method);
    next();
    // res.status(404).json({ message: '404 - Not Found' });
  });

app.listen(8081,()=>{
    console.log("Connected to Server at 8081");
})