function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`;
  if (hora >= 0 && hora < 12){
    //Bom dia !
    img.src = 'imagens/fotobom-dia.png'
    document.body.style.background = '#d4ab77'
    foto.innerHTML += '<p>Bom Dia!</p>'
      } else if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'imagens/fotoboa-tarde.png'
    document.body.style.background = '#205974'
    foto.innerHTML += '<p>Boa tarde!</p>'
         } else {
        img.src = 'imagens/fotoboa-noite.png'
        document.body.style.background = '#16303d'
    // Boa Noite!
    foto.innerHTML += '<p>Boa Noite!</p>'
      }
}
