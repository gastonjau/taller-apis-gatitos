document.addEventListener("DOMContentLoaded", ()=>{

    const contenedor = document.getElementById("contenedor")

    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            contenedor.innerHTML = data.map((mini)=>
            `<img src="${mini.url}" width="150px " height="150px"></img>`
            );
        })
        

})