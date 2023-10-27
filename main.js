let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Clientes que ya confian en nosotros!')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  window.addEventListener("scroll", function() {
    const imagenFija = document.getElementById("imagen-fija");
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollY = window.scrollY;
    const bottomOffset = 20; // Ajusta la distancia desde el borde inferior
  
    const translateY = Math.max(0, scrollY + windowHeight - documentHeight + bottomOffset);
  
    imagenFija.style.transform = `translateY(${translateY}px)`;
  });