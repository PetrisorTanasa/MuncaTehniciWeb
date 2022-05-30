// Ex 3

let b = document.getElementById('bodi');
b.style.display = 'flex';
b.style.flexDirection = 'row';
b.style.padding = '50px';
let note = ["Do","Re","Mi","Fa","Sol","La","Si","Do2"]
let i;

for(i=0;i<8;i++){
    var div = document.createElement('div');
    i = i + 1;
    div.id = 'Digit'+i;
    i = i - 1;
    let o = ""+note[i];
    div.innerHTML = o;
    div.style.background='lightblue';
    div.style.color ='blue';
    div.style.height = '60px';
    div.style.margin ='20px';
    div.style.borderStyle = 'solid';
    div.style.borderColor = 'black';
    div.style.fontSize = 'xx-large';
    document.body.appendChild(div);
}

document.addEventListener("keydown",Eventulul);
document.addEventListener("keyup",Restaurare);

function Eventulul(e){
    let i,a=0,string;
    for(i=1;i<9;i++){
        if(e.code == ('Digit'+i)){
            a=1;
            string = ''+note[i-1];
        }
    }
    if(a==0){
        return;
    }
    console.log(e.code)

    console.log(string)
    // Am incercat chiar orice si nu gasesc o solutie mai usoara...
    // S-ar putea sa fi fost o prostie in codu meu, dar cred ca o sa las if urile... =))

    if(string == 'Do'){document.getElementById('Do').play();}
    if(string == 'Re'){document.getElementById('Re').play();}
    if(string == 'Mi'){document.getElementById('Mi').play();}
    if(string == 'Fa'){document.getElementById('Fa').play();}
    if(string == 'Sol'){document.getElementById('Sol').play();}
    if(string == 'La'){document.getElementById('La').play();}
    if(string == 'Si'){document.getElementById('Si').play();}
    if(string == 'Do2'){document.getElementById('Do2').play();}

    let tasta = document.getElementById(e.code);

    tasta.style.background = 'yellow';
}

function Restaurare(e){
    let i,a=0;
    for(i=1;i<9;i++){
        if(e.code == ('Digit'+i)){a=1;}
    }
    if(a==0){
        return;
    }
    let tasta = document.getElementById(e.code);

    tasta.style.background = 'aquamarine';
}