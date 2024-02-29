export default function mobile(){
    const menuButton = document.getElementById('mobile-menu');
    const menu = document.querySelector('.header__mobile');
    const menuLink = document.querySelector('.header__link');
    const title = document.querySelector('.header__title');
    let isOpen = false;

    const open = () => {
        menu.classList.remove('mobile-hidden');
        document.body.style.overflowY = 'hidden';
        isOpen = true;
    }
    const close = () => {
        menu.classList.add('mobile-hidden');
        document.body.style.overflowY = 'scroll';
        isOpen = false;
        menu.removeEventListener('animationend', close);
    }

    menuButton.addEventListener('click', () => {
        if (!isOpen){
            open();
            menu.style.animation = 'openMenu 250ms forwards';
        }else{
            menu.style.animation = 'closeMenu 250ms forwards';
            menu.addEventListener('animationend', close)
        } 
        menu.addEventListener('click', (e) => {
            if (e.target.className === 'header__link' || e.target.id === 'mobile-button'){
                close();
            }
        })

    })
}