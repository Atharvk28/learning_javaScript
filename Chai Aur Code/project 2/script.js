const form = document.querySelector('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  const height = parseFloat(document.querySelector('#height').value)
  const weight = parseFloat(document.querySelector('#weight').value)
  const result = document.querySelector('#result')
  const tagline = document.getElementById('tagline')

   const calculate = ( weight / ((height*height)/10)).toFixed(2);

   result.innerHTML = calculate;
   if(calculate > 24.9){
    tagline.innerHTML = `you are overweight`;
   }
   else if( calculate >18.6 && calculate<24.9 ){
    tagline.innerHTML = `you are normal`;
   }
   else{
    tagline.innerHTML = `you are underweight.`
   }


})