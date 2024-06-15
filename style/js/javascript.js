document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn');

    burgerMenu.addEventListener('click', () => {
        mobileNav.style.left = '0';
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.style.left = '-100%';
    });

    document.addEventListener('click', (event) => {
        if (!mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileNav.style.left = '-100%';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const accHeads = document.querySelectorAll('.acc-head');

    accHeads.forEach(accHead => {
        accHead.addEventListener('click', function () {
            const accItem = this.closest('.acc-item');
            if (!accItem) return;


            accItem.classList.toggle('active');


            const arrow = this.querySelector('.arrow');
            if (arrow) {
                arrow.classList.toggle('rotate');
            }


            const accBody = accItem.querySelector('.acc-body');
            if (accBody) {
                accBody.classList.toggle('active');
            }
        });
    });
});
