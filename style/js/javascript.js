document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn');

    // Function to disable scrolling
    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    // Function to enable scrolling
    const enableScroll = () => {
        document.body.style.overflow = '';
    };

    burgerMenu.addEventListener('click', () => {
        mobileNav.style.left = '0';
        disableScroll(); // Disable scrolling when mobile nav is open
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.style.left = '-100%';
        enableScroll(); // Enable scrolling when mobile nav is closed
    });

    document.addEventListener('click', (event) => {
        if (!mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileNav.style.left = '-100%';
            enableScroll(); // Enable scrolling if clicked outside mobile nav
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
