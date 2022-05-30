function changeText(){
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200) {
            document.getElementById('div1').innerHTML = xhttp.responseText;
            console.log(xhttp.response,typeof(xhttp.response))
        }
    }
    xhttp.open('GET','Salvari.txt',true);
    xhttp.send();
}