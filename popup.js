let btn =document.getElementById('button1');
let new1 = document.getElementById('new');
let close =document.querySelector('.close');

btn.addEventListener('click',function(e){
    let show = e.currentTarget;
    if(show.classList.contains('show-box')){
        new1.classList.remove('show-box')
    }
    else{
        new1.classList.add('show-box')
    }
    
})
close.addEventListener('click',function(){
    new1.classList.remove('show-box')
})