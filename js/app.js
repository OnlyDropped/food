const list = document.querySelectorAll('.delicious__item')
  list.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  list.forEach(el=>{ el.classList.remove('delicious__item--active'); });
  item.classList.add('delicious__item--active')
  })
})


let menuBtn = document.querySelector('.header-top__menu');
let menu = document.querySelector('.header-top__nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('header-top__menu--active');
})

document.addEventListener("copy", (evt) => {
  evt.clipboardData.setData("text/plain", "Копирование запрещено");
  evt.preventDefault();
}, false);