const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach( (item) => {
item.addEventListener('click', function(event) {
  console.log(event.target)
  if(event.target.id === 'gray'){
    body.style.backgroundColor = event.target.id;
  }
  if(event.target.id === 'white'){
    body.style.backgroundColor = event.target.id;
  }
  if(event.target.id === 'blue'){
    body.style.backgroundColor = event.target.id;
  }
  if(event.target.id === 'yellow'){
    body.style.backgroundColor = event.target.id;
  }
})
});
