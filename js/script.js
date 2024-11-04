
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-menu');

burger.addEventListener('click', function() {
    burgerMenu.classList.toggle('open');
});


const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    alert('ქრისტინა ძალიან კარგი ლექტორი ხარ. სასიამოვნო იყო შენი ლექციების მოსმენა 2x-ზეც. \u2764');
  });