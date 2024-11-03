const accordion = document.querySelectorAll('.accordion');
accordion.forEach(function(accord){
    accord.addEventListener("click",function(){
         accord.classList.toggle('active')
    })
    
})
