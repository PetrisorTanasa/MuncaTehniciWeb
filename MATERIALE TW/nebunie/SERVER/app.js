const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const path = require("path")
let lista = []
const fs = require('fs');
const { render } = require('express/lib/response');
const e = require("express");
app.use(express.static(path.join(__dirname,'/static')))
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

// app.get("/about", (req,res) => {
//   res.send("about")
// });

// app.get("/product", (req,res) => {
//   res.send(lista)
// });

// app.get("/products/:produsId", (req,res) => {
//   const produsId = req.params.produsId
//   res.send(lista[produsId])
// });

// app.get("/adaugare/:produsId", (req,res) => {
//   const produsId = req.params.produsId
//   lista.push(produsId)
//   res.send(lista)
// })

// function arrayRemove(arr, value) {

//   return arr.filter(function(geeks){
//       return geeks != value;
//   });

// }

// app.get("/stergere/:produsId", (req,res) => {
//   const produsId = req.params.produsId
//   var l=[],i;
//   for(i=0;i<lista.length;i++){
//     l[i] = lista[i]
//   }
//   lista = arrayRemove(lista,produsId)
//   for(i=0;i<l.length;i++){
//     if(l[i] == lista[i]){
//       res.send("Nu exista")
//       return
//     }
//   }
//   res.send(lista)
// })

app.get('/create',(req,res)=>{
  res.render(path.join(__dirname,'/views/HTML_adaugare_review'))
}
)

// app.get('/read',(req,res)=>{
//   res.sendFile(path.join(__dirname,'views/Hte'));
//   }
// )

app.get('/update',(req,res)=>{
  res.render("Htelemea_de_update");
  res.send('1')
})

app.post('/reviewuri',(req,res)=>{
  let Review = {nume:'',prop:''}

  let Copiat = req.body

  console.log(JSON.stringify(Copiat))

  fs.writeFile('./static/Salvari.txt',(JSON.stringify(Copiat)+"$"),{flag: 'a+'},(err)=>{console.log(err)})
})

app.get('/reviewuri',(req,res)=>{
  res.sendFile(path.join(__dirname,'views/htelemea.html'));
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/Htelemea_de_update.html'));
})

app.patch('/update',(req,res)=>{
   const dataAdd = req.body;
   let {nume, prop, fileResponse} = dataAdd;

   //console.log(nume,prop,fileResponse)
   console.log(fileResponse)
  fileResponse = fileResponse.split('$')

  let String_update="";

  for(let obj of fileResponse)
  {
let trei_poz = obj.split(":")
try{
let numeRev = trei_poz[1].split(',')

    if(numeRev[0] == ("\""+nume+"\"")){
    console.log("a intrat")

      trei_poz[2] = "\"" + prop + "\"}";}}
      catch{}
  trei_poz = trei_poz.join(":")
  obj = trei_poz
  console.log(obj)
  console.log(String_update)
      if(obj != ""){
      String_update = String_update + obj + "$"}
  }
  //console.log(fileResponse);
console.log(String_update)

   fs.writeFile('./static/Salvari.txt',String_update,(err)=>{console.log(err)})
  // res.sendStatus(201);
  //let newData = req.body;
  //console.log(newData);
  res.send(200)
})

app.get('/delete',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/Htelemea_de_delete.html'));
})

app.patch('/delete',(req,res)=>{
  const dataAdd = req.body;
  let {nume, prop, fileResponse} = dataAdd;

  //console.log(nume,prop,fileResponse)
  console.log(fileResponse)
 fileResponse = fileResponse.split('$')

 let String_update="";

 for(let obj of fileResponse)
 {
let trei_poz = obj.split(":")
try{
let numeRev = trei_poz[1].split(',')

   if(numeRev[0] == ("\""+nume+"\"")){
   console.log("a intrat")
}
  else{
    trei_poz = trei_poz.join(":")
    obj = trei_poz
    console.log(obj)
    console.log(String_update)
   
        String_update = String_update + obj + "$"}
}

     catch{}
 }
 //console.log(fileResponse);
console.log(String_update)

  fs.writeFile('./static/Salvari.txt',String_update,(err)=>{console.log(err)})
 // res.sendStatus(201);
 //let newData = req.body;
 //console.log(newData);
 res.send(200)
})

app.use(function(req, res, next){
  res.status(404);

  res.type('txt').send('Not found, error 404');

  return
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

