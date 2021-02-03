let request = new XMLHttpRequest();
let arrayNovo = [];
request.open("GET", "https://randomuser.me/api?results=10");
request.addEventListener("load",() => {
    if(request.status==200){
        let response = JSON.parse(request.responseText);
        response = response.results;
        arrayNovo = response.map(response => `${response.name.first} ${response.name.last}`);
        console.log(arrayNovo);
    };
});
request.send();