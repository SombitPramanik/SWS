const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn img');
const dropdown = document.querySelector('.dropdown');
const open = document.getElementById('open');
const close = document.getElementById('close');

toggleBtn.onclick = function () {
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');


    const open = document.getElementById('open');
    const close = document.getElementById('close');

    if (open && close) {
        close.style.display = isOpen ? 'block' : 'none';
        open.style.display = isOpen ? 'none' : 'block';
    }
}