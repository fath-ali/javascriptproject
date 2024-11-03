const customarcursor = document.querySelector('.cursor');
const navlinks = document.querySelectorAll('.nav-link li');
document.addEventListener('mousemove',moveCusor);
function moveCusor(e){
    updateCursorPosition(e);
}
function updateCursorPosition(e){
    customarcursor.style.top = e.pageY + "px";
    customarcursor.style.left = e.pageX + "px";
}
navlinks.forEach(function(link){
    link.addEventListener('mouseenter',function(){
        animateCursor();
        highlightLink(link);
    });
    link.addEventListener('mouseleave',function(){
     removCursorAnimation();
     unhighlightLink(link);
    });

});

function animateCursor(){
     customarcursor.classList.add('link-animate')
}
function removCursorAnimation(){
 customarcursor.classList.remove('link-animate');
}
function highlightLink(link){
 link.classList.add("link-hovering")
}
function unhighlightLink(link){
 link.classList.remove("link-hovering")
}