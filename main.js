
document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('resultado').innerHTML = `<img src="https://petrobras.azurewebsites.net/img/ajax-loader.gif">`
    const gt = document.getElementById('titulo').value
    if(titulo.value == ""){
        alert('CAMPO NÃO PREENCHIDO, DIGITE UM TÍTULO!')
    }


    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q= ${gt} & key = AIzaSyDAQTKJkM3iLiCys2IR6Dn70lAxZcUq7eY`)

    xhr.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let requis = JSON.parse(this.responseText)
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = ""
      
        for(let  i=0; i<requis.items.length; i++ ){

           if(requis.items[i].volumeInfo.publishedDate == undefined){
            requis.items[i].volumeInfo.publishedDate ="Data de Publicação Não Encontrada"
           }else if(requis.items[i].volumeInfo.publisher  == undefined){
            requis.items[i].volumeInfo.publisher = "Editora Não Encontrada"
           }else if(requis.items[i].volumeInfo.authors  == undefined){
            requis.items[i].volumeInfo.authors = "Autor Não Encontrado"
           }
    
           resultado.innerHTML += `<div id="resultBook"><p id="titl">${requis.items[i].volumeInfo.title }</p><p>${requis.items[i].volumeInfo.authors}</p>
           <p>${requis.items[i].volumeInfo.publisher}</p><p>${requis.items[i].volumeInfo.publishedDate}</p>
           <img id="imgResult" src="${requis.items[i].volumeInfo.imageLinks.smallThumbnail}">
           <a id="saibaMais" href= "${requis.items[i].volumeInfo.infoLink}"> CLIQUE PARA DETALHES </a></div>`
           
        }    
    }
    }
    xhr.send()
   
})

document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('resultado').innerHTML = `<img src="https://petrobras.azurewebsites.net/img/ajax-loader.gif">`
    const ga = document.getElementById('autor').value

    const xr = new XMLHttpRequest()
    xr.open('GET', `https://www.googleapis.com/books/v1/volumes?q= ${ga} & key = AIzaSyB-SbDbkO_peKBPlIB_Hi3ucIrtQ9V2vf8` )

    xr.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let requisicao = JSON.parse(this.responseText)
        let resultado = document.getElementById('resultado')
       

        resultado.innerHTML = ""
      
        for(let  i=0; i<requisicao.items.length; i++ ){

           if(requisicao.items[i].volumeInfo.publishedDate == undefined){
            requisicao.items[i].volumeInfo.publishedDate ="Data de Publicação Não Encontrado!"
           }else if(requisicao.items[i].volumeInfo.publisher  == undefined){
            requisicao.items[i].volumeInfo.publisher = "Editora Não Encontrado"
           }else if(requisicao.items[i].volumeInfo.authors  == undefined){
            requisicao.items[i].volumeInfo.authors = "Autor Não Encontrado"
           }
    
           resultado.innerHTML += `<div id="resultBook"><p id="titl">${requisicao.items[i].volumeInfo.title }</p><p>${requisicao.items[i].volumeInfo.authors}</p>
           <p>${requisicao.items[i].volumeInfo.publisher}</p><p>${requisicao.items[i].volumeInfo.publishedDate}</p>
           <img id="imgResult" src="${requisicao.items[i].volumeInfo.imageLinks.smallThumbnail}">
           <a id="saibaMais" href= "${requisicao.items[i].volumeInfo.infoLink}">MAIS DETALHES</a></div>`
           
        }    
    }
    }
    xr.send()
   
})


