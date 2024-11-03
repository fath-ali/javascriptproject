const gerneratBtn = document.getElementById('GenerateBtn')

gerneratBtn.addEventListener('click',updatecolor)

function getRandomColor(){
    let letter = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i<6;i++){
        color += letter[Math.floor(Math.random() * 16)];
        console.log(color);
        
    }
    return color
}
function updatecolor(){
    const colorbox =document.getElementById('colorbox');
const colortext =document.getElementById('colorText');
const randomcolor = getRandomColor();
colortext.style.color = 'white'
 colorbox.style.backgroundColor = randomcolor;
 colortext.textContent = randomcolor;
}