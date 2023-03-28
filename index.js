const viewsInput = document.getElementById("views")
const label = document.querySelector('.label')
const price = document.querySelector('.price')
const toggleBtn = document.querySelector('.toggle-btn')
const toggle = document.querySelector('.toggle')

let yearlyBilling = false;

viewsInput.addEventListener('input', updateValues);

toggleBtn.addEventListener('click', ()=>{
  toggleBtn.classList.toggle('checked')
  toggle.classList.toggle('checked')

  if(!yearlyBilling){
    yearlyBilling = true;
    updateValues();
  }
  else {
    yearlyBilling = false;
    updateValues();
  }
})

function updateValues(){
  let val = parseInt(viewsInput.value);

  if(val === 1){
    label.textContent = "10K pageviews";
    viewsInput.style.backgroundSize = `${(val * 10) - val * 5}% 100%`
    price.textContent = `$${checkPrice(8)}`
  }
  if(val === 2){
    label.textContent = "50K pageviews";
    viewsInput.style.backgroundSize = `${(val * 15) - val * 4}% 100%`
    price.textContent = `$${checkPrice(12)}`
  }
  if(val === 3){
    label.textContent = "100K pageviews";
    viewsInput.style.backgroundSize = `${(val * 20) - val * 2}% 100%`
    price.textContent = `$${checkPrice(16)}`
  }
  if(val === 4){
    label.textContent = "500K pageviews";
    viewsInput.style.backgroundSize = `${(val * 20) - val * 2}% 100%`
    price.textContent = `$${checkPrice(24)}`
  }
  if(val === 5){
    label.textContent = "1m pageviews";
    viewsInput.style.backgroundSize = `${(val * 20) - val * 2}% 100%`
    price.textContent = `$${checkPrice(36)}`
  }
}

function checkPrice(p){
  if(yearlyBilling){
    return (p * 0.75).toFixed(2);
  }
  return p.toFixed(2);
}

