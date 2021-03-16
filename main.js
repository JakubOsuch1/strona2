// help nav to close after click on mobile
const navLinks = document.querySelector('#navbarNavAltMarkup');
     navLinks.addEventListener('click', function(){
       navLinks.classList.remove('show');
     })

     document.body.addEventListener('click', function(){
       navLinks.classList.remove('show');
     })

// reveal sections on scroll
window.addEventListener('scroll', reveal);


function reveal(){
  var reveals = document.querySelectorAll('.reveal1');
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;
      

      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('active1');
        console.log('pyk');
      }
      else{
        reveals[i].classList.remove('active1');
      }
    }
}