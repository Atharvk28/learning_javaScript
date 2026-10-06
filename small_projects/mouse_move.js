const box = document.getElementById("target");

box.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`X: ${x}, Y: ${y}`);
   let interval;

  const randomcolor = function(){
    const hex = '0123456789ABCDEF';
  let color='#';
  for(let i =0; i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
  }
function startchangingcolor(){
  document.body.style.backgroundColor = randomcolor();
  }

  function stopchangingcolor(){
    clearInterval(interval)
  }

const changingColor = function(){

 interval =  setInterval(startchangingcolor,1000)
}

document.querySelector('.start').addEventListener('mousemove',changingColor);
document.querySelector('.end').addEventListener('click', stopchangingcolor);

});
