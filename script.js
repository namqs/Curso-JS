function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours ()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}.`
    if (hora >= 0 &&  hora< 12){
       img.innerHTML = '<img src="manha.jpeg">'
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="tarde.jpg">'
    } else {
        img.innerHTML = '<img src="noite.jpg">'
    }
}