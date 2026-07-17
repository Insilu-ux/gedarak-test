const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

const allProperties={};  

app.get("/api/properties",function(req,res){

let properties=[];

for(const id in allProperties){

const property=allProperties[id];

if(property.hidden===true){

continue;

}

properties.push(property);

}

properties.sort(function(a,b){

let boostA=0;
let boostB=0;

if(

a.boost&&

a.boost.status==="Active"&&

a.boost.endDate>Date.now()

){

if(a.boost.package==="Basic") boostA=1;
if(a.boost.package==="Premium") boostA=2;
if(a.boost.package==="Platinum") boostA=3;

}

if(

b.boost&&

b.boost.status==="Active"&&

b.boost.endDate>Date.now()

){

if(b.boost.package==="Basic") boostB=1;
if(b.boost.package==="Premium") boostB=2;
if(b.boost.package==="Platinum") boostB=3;

}

if(boostA!==boostB){

return boostB-boostA;

}

return (b.createdAt||0)-(a.createdAt||0);

});

res.json({

properties:properties,

totalPages:1

});

});

app.use(express.urlencoded({
    extended:true
}));

app.use(express.static(__dirname));

const PORT = 3000;

app.get("/",function(req,res){

    res.sendFile(
        path.join(__dirname,"index.html")
    );

});

app.listen(PORT,function(){

    console.log(
        "Server running on http://localhost:"+PORT
    );

});