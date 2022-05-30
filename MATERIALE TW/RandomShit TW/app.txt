const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express')
const app = express()
const path = require('path')

app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/static')))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let Orase = [ { 
  nume: "Bucuresti",
  Populatie: 1900000,
  Capitala: true,
  }
]

app.get('/vizualizare',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/html_citire.html'));
})

app.get('/adaugare',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/html_adaugare.html'));
})
app.get('/',(req,res)=>{
  res.render('home.ejs',{orase: JSON.stringify(Orase)});
})

app.get('/vizualizare/afis',(req,res)=>{
  //res.status(201).send(req.body)
  let {dimensiune, Capitala} = req.query;
  let list = []
  Orase.forEach(function(element){
      if(dimensiune === "mic" && parseInt(element.Populatie) < 10000 && element.Capitala === Capitala)
          list.push(element);
      else if(dimensiune === "mare" && parseInt(element.Populatie) >= 10000 && element.Capitala === Capitala)
          list.push(element)
  })
  res.status(201).send(list);
})

app.post('/',(req,res)=>{
  Orase.push(req.body);
  //res.status(201).send(Orase);
  res.render('home.ejs',{orase: JSON.stringify(Orase)})
})

app.get('/sendOrase',(req,res)=>{
  res.status(200).send(Orase);
})

app.get('/adaugare',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/html_adaugare.html'));
})

app.get('/vizualizare',(req,res)=>{
  res.status(200).send(200);
})

app.listen(3000,()=>{
  console.log('App is listening at Port 3000.')
})