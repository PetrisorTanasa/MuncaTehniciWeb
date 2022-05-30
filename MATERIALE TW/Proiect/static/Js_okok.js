function func()
{
    const obj = {
        titlu : "",
        prop : ""
    }

    const xhr = new XMLHttpRequest();
    let fileObject
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('div1').innerText = xhr.response;
            fileObject = xhr.response;
        }
    }
    xhr.open('GET','data.txt',false);
    xhr.send();

    obj.titlu = document.getElementById('titlu').value;
    obj.prop = document.getElementById('prop').value;

    fileObject = JSON.parse(fileObject);

    if(obj.titlu !== '')
        fileObject.titlu = obj.titlu;
    if(obj.prop !== '')
        fileObject.prop = obj.prop;


    const requestParams = {
        method : "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(fileObject)
    }

    fetch('http://localhost:3000',requestParams);



}
