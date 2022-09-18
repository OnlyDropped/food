const list = document.querySelectorAll('.delicious__item')
  list.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  list.forEach(el=>{ el.classList.remove('delicious__item--active'); });
  item.classList.add('delicious__item--active')
  })
})