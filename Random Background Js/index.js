const colors = [0,1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
const color = document.getElementById('color');
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let hg = '#'
    for(let i=0;i<6;i++){
        hg += colors[randomNumber()]
    }
    color.textContent = hg
    document.body.style.backgroundColor = hg
})

function randomNumber(){
    return Math.floor(Math.random() * colors.length)
}