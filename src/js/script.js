//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageXOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//burgir
const burgir = document.querySelector('#burgir');

burgir.addEventListener('click', function(){
    burgir.classList.toggle('burgir-active');
})