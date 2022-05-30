const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const path = require("path")
var lista = {elem:[]}
const fs = require('fs');
const { render } = require('express/lib/response');
app.use(express.static(path.join(__dirname,'/static')))
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/about", (req,res) => {
  res.send("about")
});

app.get("/product", (req,res) => {
  res.send(lista)
});

app.get("/products/:produsId", (req,res) => {
  const produsId = req.params.produsId
  res.send(lista[produsId])
});

app.get("/adaugare/:produsId", (req,res) => {
  const produsId = req.params.produsId
  lista.push(produsId)
  res.send(lista)
})

function arrayRemove(arr, value) {
 
  return arr.filter(function(geeks){
      return geeks != value;
  });

}

app.get("/stergere/:produsId", (req,res) => {
  const produsId = req.params.produsId
  var l=[],i;
  for(i=0;i<lista.length;i++){
    l[i] = lista[i]
  }
  lista = arrayRemove(lista,produsId)
  for(i=0;i<l.length;i++){
    if(l[i] == lista[i]){
      res.send("Nu exista")
      return
    }
  }
  res.send(lista)
})

app.get('/create/:elementAdaugat',(req,res)=>{
  let elementAdaugat = req.params.elementAdaugat;
  let element = {
    nume:elementAdaugat,
    nrObiecte:1
  }
  res.send(element)
  
  lista.elem.push(element)
  
  fs.writeFile('./static/Salvari.txt', JSON.stringify(element), { flag: 'a+' }, err => {
    console.log('Adaugat')
  });
})

app.get('/read',(req,res)=>{
  res.sendFile(path.join(__dirname,'views/htelemea.html'));
  }
)

app.get('/update',(req,res)=>{
  res.render("Htelemea_de_update");
  res.send('1')
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/Htelemea_de_update.html'));
})

app.patch('/',(req,res)=>{
  const dataAdd = req.body;
  fs.writeFile('./static/Salvari.txt',JSON.stringify(dataAdd),(err)=>{console.log(err)})
  res.sendStatus(201);
})

app.use(function(req, res, next){
  res.status(404);

  res.type('txt').send('Not found, error 404');

  return
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

