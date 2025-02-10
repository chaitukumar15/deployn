var http = require("http");



var server = http.createServer(async(req, res) => {

    var data= await fetch("https://fakestoreapi.com/products");

    var dataa=await data.json()


    var mens=dataa.filter((val)=>{

        return val.category=="men's clothing"

    })


    mens.sort((a,b)=>{

       return  b.price-a.price

    })


  res.write(JSON.stringify(mens));

  res.end();
});

var port = 3000;
server.listen(port, () => {
  console.log("hi server has been started");
});
