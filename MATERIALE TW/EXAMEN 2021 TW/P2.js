let lista_cul=['blue','yellow','red','aquamarine','green']

let b = document.getElementById('bodi')
b.style.display = 'flex';
b.style.flexDirection = 'row';
let left = 0;

function Creatie(){
    
    const data = new Date()
    let nr = data.getHours()
    let i,indice;



    for(i=0;i<nr;i++){
    left = left + 14;
    let div = document.createElement('div')
    div.className='patrat'
    indice = Math.random() * 5;
    indice = Math.floor(indice)
    div.id = i;
    div.style.position = 'absolute';
    div.style.left = left +'px';
    div.style.backgroundColor = lista_cul[indice];

    div.addEventListener('click',Functie)

    document.body.appendChild(div);
    }
}

function Functie(e){
    let div = document.getElementById(e.path[0].id);
    let pozitie = window.getComputedStyle(div).getPropertyValue('top')

    pozitie = pozitie.slice(0, -2);
    pozitie = parseFloat(pozitie);
    pozitie += 5;

    console.log(pozitie)

    div.style.top = pozitie + 'px';
}