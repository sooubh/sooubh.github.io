document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");
  
   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 
   ripple.style.animation = `ripple-effect .4s  linear`;
   ripple.onanimationend = () => {
     document.body.removeChild(ripple);
     
   }
  
}

// extra and optional part:

const all = document.body.getElementsByTagName("*");
for (var i = 0;  i < all.length; ++i) {
  all[i].onclick = (event) => event.stopPropagation();
}


function showSidebar(){
  const sidebar = document.querySelector('.nav-list-mobile')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
   const sidebar = document.querySelector('.nav-list-mobile')
  sidebar.style.display = 'none'
}