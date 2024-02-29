export default function modal(){
    const workContainer = document.querySelector('.work__container');
    const modalBackground = document.getElementById('modal-background');

    let isOpen = false;

    workContainer.addEventListener('click', e => {
        const modalToggle = e.target.closest('.work__image');
    
        if (!modalToggle) return;

        const modal = modalToggle.nextElementSibling;
        const closeButton = modal.querySelector('.modal-exit');

        const openModal = () => {
            if (isOpen) return;
            modal.classList.add('is-open');
            modalBackground.style.transform = 'scale(1)';
            modal.style.animation = 'modalOpen 250ms forwards';
            document.body.style.overflowY = 'hidden';
            isOpen = true;
        } 

        const closeModal = () => {
            modal.classList.remove('is-open');
            modalBackground.style.transform = 'scale(0)';
            modal.removeEventListener('animationend', closeModal);
            document.body.style.overflowY = 'scroll';
            isOpen = false;
        }

        const handleClose = () => {
            modal.style.animation = 'modalClose 250ms forwards';
            closeModal();
        }

        closeButton.addEventListener('click', handleClose);
        modalBackground.addEventListener('click', handleClose);
        
        openModal();
    })
}
