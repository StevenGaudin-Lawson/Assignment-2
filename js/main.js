const toggle = document.querySelector('.toggle-btn');

toggle.addEventListener('click', () => {
    document.querySelector('.wide-flex').classList.toggle('active-nav');
});