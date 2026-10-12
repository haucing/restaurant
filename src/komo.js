
let all_btn = document.getElementById('all_btn')
let sushi_btn = document.getElementById('sushi_btn')
let ramen_btn = document.getElementById('ramen_btn')
let small_btn = document.getElementById('small_btn')

let sushi_cards = document.getElementsByClassName('sushi')
let ramen_cards = document.getElementsByClassName('ramen')
let small_cards = document.getElementsByClassName('small')
let all_cards   = document.getElementsByClassName('all')

console.log(sushi_cards);  

all_btn.onclick = function(){
   
  
   for(let sushi_card of sushi_cards){
    sushi_card.style.display = 'block'
   }
   for(let ramen_card of ramen_cards){
    ramen_card.style.display = 'block'
   }

   for(let small_card of small_cards){
    small_card.style.display = 'block'
   }

   this.classList.add('active')
   sushi_btn.classList.remove('active')
   ramen_btn.classList.remove('active')
   small_btn.classList.remove('active')
}

sushi_btn.onclick = function(){
//    console.log(cloth_cards) 

   for(let sushi_card of sushi_cards){
   //  sushi_card.style.display = 'block'
      sushi_card.classList.remove('w-full')
      sushi_card.style.display = '';
      sushi_card.classList.add('grid', 'grid-cols-2', 'max-w-xl', 'gap-10');
   }
   for(let ramen_card of ramen_cards){
    ramen_card.style.display = 'none'
   }

   for(let small_card of small_cards){
    small_card.style.display = 'none'
   }

   this.classList.add('active')
   all_btn.classList.remove('active')
   ramen_btn.classList.remove('active')
   small_btn.classList.remove('active')
}

ramen_btn.onclick = function(){
    //  console.log(shoe_cards)

    for(let ramen_card of ramen_cards){
   //  ramen_card.style.display = 'block'
   ramen_card.style.display = '';
   ramen_card.classList.remove('w-full')
   ramen_card.classList.add('grid','grid-cols-2','max-w-xl','gap-10')
   }

   for(let sushi_card of sushi_cards){
    sushi_card.style.display = 'none'
   }

   for(let small_card of small_cards){
    small_card.style.display = 'none'
   }

   this.classList.add('active')
   all_btn.classList.remove('active')
   sushi_btn.classList.remove('active')
   small_btn.classList.remove('active')


}

small_btn.onclick = function(){
    //  console.log(watch_cards)

    for(let small_card of small_cards){
   //  small_card.style.display = 'block'
    small_card.style.display = '';
    small_card.classList.remove('w-full')
    small_card.classList.add('grid','grid-cols-2','max-w-xl','gap-10')

   }

    for(let sushi_card of sushi_cards){
    sushi_card.style.display = 'none'
   }

   for(let ramen_card of ramen_cards){
    ramen_card.style.display = 'none'
   }

   this.classList.add('active')
   all_btn.classList.remove('active')
   sushi_btn.classList.remove('active')
   ramen_btn.classList.remove('active')
   
}

document.getElementById('previewBtn').addEventListener('click', function () {
  // Input များမှ တန်ဖိုးများ ရယူခြင်း
  let name = document.getElementById('nameinput').value || 'e.g Hau';
  let rawDate = document.getElementById('dateinput').value;
  let guests = document.getElementById('guestselect').value || '1 guest';
  let time = document.getElementById('timeselect').value || '12:00';

  // ရက်စွဲကို Mon, September 28, 2026 ပုံစံသို့ ပြောင်းလဲခြင်း
  let formattedDate = 'Not selected';
  if (rawDate) {
    let dateObj = new Date(rawDate);
    let options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    formattedDate = dateObj.toLocaleDateString('en-US', options);
  }

  // Modal ထဲရှိ Text များတွင် သွားရောက် အစားထိုးခြင်း
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayDate').textContent = formattedDate;
  document.getElementById('displayTime').textContent = time;
  document.getElementById('displayGuests').textContent = guests;

  // Modal ကို ဖွင့်ခြင်း
  document.getElementById('my_modal_3').showModal();
});