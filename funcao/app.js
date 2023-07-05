

function entra(){
    alert("Fucniona")
}

function entra(){
    telaUm.style.display='flex'
}

function fFechaTela(){
    telaUm.style.display='none'
}


/***** menu ******/

const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}