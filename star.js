const toggle = document.getElementById('icon');
const container = document.getElementById('container');

toggle.addEventListener('click', function(){
  container.classList.toggle('pushed');
});
