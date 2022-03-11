document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('input-senha').type = 'text';
    document.getElementById('input-senha').focus()
    olho.style.backgroundImage = ' url("../../Assets/Login/vetor-olho-aberto.svg") '
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('input-senha').type = 'password';
    olho.style.backgroundImage = ' url("../../Assets/Login/vetor-olho-fechado.svg") '
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('input-senha').type = 'password';
    olho.style.backgroundImage = ' url("../../Assets/Login/vetor-olho-fechado.svg") '
  });


  document.getElementById('input-senha').addEventListener('mousemove', function() {
    olho.style.backgroundImage = ' url("../../Assets/Login/vetor-olho-fechado.svg") '
  });

  document.getElementById('olho').addEventListener('mouseleave', function() {
    olho.style.backgroundImage = 'url("../../Assets/Login/vetor-olho-aberto.svg")'
  });
  document.getElementById('input-senha').addEventListener('mouseleave', function() {
    olho.style.backgroundImage = 'url("../../Assets/Login/vetor-olho-fechado.svg")'
  });

  document.getElementById('input-senha').addEventListener('focus', function(){
    olho.style.backgroundImage = 'url("../../Assets/Login/vetor-olho-fechado.svg")'
  })


  let olho = document.getElementById('olho')