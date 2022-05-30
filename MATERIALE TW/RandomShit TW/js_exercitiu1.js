let lista = [1,2,3,4,5,6,7,8,9,10]

function select(){
    let input=document.getElementById('input');
    var z1 = /^[0-9]*$/;
    if (!z1.test(input.value)) {
        alert('Input invalid')
        return;
    }

    let inputValue = parseInt(input.value) ;
    let inputValueinitial = inputValue;

    while(inputValue <= 10){
        let div = document.getElementById(inputValue);
        div.style.display = 'none';

        lista = lista.filter(function(item){
            return item !== inputValue
        })
        inputValue = inputValue + inputValueinitial;
    }

    let interval = setInterval(function(){
        div = document.getElementById(lista[0])
        div.style.display ='none';

        lista.shift();
        if(lista.length == 0){
        clearInterval(interval)
        }
    },2000)
}