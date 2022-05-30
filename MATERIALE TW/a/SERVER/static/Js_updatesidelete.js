function ajax(){
    const xhr = new XMLHttpRequest();
    let Response = "done"
    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            Response  = xhr.response;
        }
    }
    xhr.open('GET','Salvari.txt',false);
    xhr.send();

    return Response
}

function func(){
    const Nume = document.getElementById('titlu').value;
    const Prop = '';
    // console.log(obj);
    let Response = ajax();
    let obj = {nume:Nume,prop:Prop,fileResponse:Response};
    obj = JSON.stringify(obj);
    console.log(obj);
    console.log(JSON.parse(obj))
    const requestParams = {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: obj
    }
    fetch('http://localhost:3000/delete',requestParams);
}

function update(){
    const xhr = new XMLHttpRequest();
    let Response = 'ceva';
    Response = ajax();
    console.log(Response);
    document.getElementById('div1').innerText = Response;
}

function adauga(){

    let keyName = document.getElementById('div1').innerText;
    console.log(keyName)
}