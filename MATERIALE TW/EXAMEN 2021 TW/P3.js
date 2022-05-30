document.addEventListener('keydown',B);
let i =0;
var lista = document.getElementById("ok").options
let input=document.getElementById('data')

function Functie(){


    input.value = new Date;


    try{
    let cul = localStorage.getItem('ultimaCuloare')
    i = localStorage.getItem('ultimuIndex')

    console.log(i)
    input.style.color = cul + ''
    lista[i%3].selected = true;}

    catch{}


    // var intervalulMeu = setInterval(function(){
    //     let optiune= lista[i%3].value;
    //     lista[i%3].selected = true;
    //     i = i+1;
    //     input.style.color=optiune+"";
    //     window.localStorage.setItem('ultimaCuloare',optiune)
    //     window.localStorage.setItem('ultimuIndex',i)
    // },3000)
}

var intervalulMeu = setInterval(function(){
    let optiune= lista[i%3].value;
    lista[i%3].selected = true;
    i = i+1;
    input.style.color=optiune+"";
    window.localStorage.setItem('ultimaCuloare',optiune)
    window.localStorage.setItem('ultimuIndex',i%3)
},3000)

function B(e){
    console.log(e)
    if(e.code == "KeyS"){
        clearInterval(intervalulMeu);
    }
}