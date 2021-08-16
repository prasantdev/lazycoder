const menuBars = document.getElementById('menu-bars');
const sideBar = document.getElementById('side-bar');

menuBars.addEventListener('click', ()=> { 
    sideBar.style.left = '0';
});
document.addEventListener('click', (e)=>{ 
    if(e.target.id !== 'side-bar-profile'){
        sideBar.style.left = '-100vw';
    }
}, true);