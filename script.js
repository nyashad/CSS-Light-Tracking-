let focus = document.querySelector(".focus");

document.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;
    
    focus.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(139, 111, 239, 0.4), transparent 40%)`; 
});
