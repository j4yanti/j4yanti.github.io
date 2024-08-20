let item1 = document.querySelector('.item1');
let submitbtn = document.querySelector('.submitbtn');
let cashtotal1 = document.querySelector('.cashtotal1');
let item2 = document.querySelector('.item2')
let submitbtn2 = document.querySelector('.submitbtn2')
let cashtotal2 = document.querySelector('.cashtotal2')
let item3 = document.querySelector('.item3')
let submitbtn3 = document.querySelector('.submitbtn3')
let cashtotal3 = document.querySelector('.cashtotal3')

submitbtn.addEventListener('click',function(){
    cashtotal1.textContent='Your total will be $' + String(item1.value * 15) + '.'
})

submitbtn2.addEventListener('click',function(){
    cashtotal2.textContent='Your total will be $' + String(item2.value * 20) + '.'

})

submitbtn3.addEventListener('click',function(){
    cashtotal3.textContent='Your total will be $' + String(item3.value * 20) + '.'

})