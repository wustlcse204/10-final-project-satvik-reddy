let magic_click = document.querySelector(".magic_click");

magic_click.addEventListener("click", magicalpics);

function magicalpics(){

    let randomcats = document.querySelector(".randomcats")
     randomcats.innerHTML = ''


    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) =>{
        let magicat = data[0].url
        let magicatel = document.createElement("img")
        magicatel.setAttribute('src',`${magicat}`)
        magicatel.classList.add("magicrandomcat")

        let randomcats = document.querySelector(".randomcats")
        randomcats.appendChild(magicatel)
        
    })

}