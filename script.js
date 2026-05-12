const togglebtn = document.querySelector('.toggle');

const menubar = document.querySelector('.menu');

const body = document.querySelector('body');

togglebtn.addEventListener('click', () => {
    togglebtn.classList.toggle('active');
    menubar.classList.toggle('active')
});

/**background scroll lock logic */

if(menubar.classList.contains('active')){
    body.style.overflow = 'hidden';//menu open hole scrol bondo hobe

}else{
    body.style.overflow = 'auto';//menu close hole scroll abar chalu hobe
}