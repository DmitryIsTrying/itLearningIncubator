const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

const handler = (event) => {
  console.log(event.currentTarget.id)
}

box1.addEventListener('click', handler, { capture: true })
box2.addEventListener('click', handler, { capture: true })
box3.addEventListener('click', handler)
