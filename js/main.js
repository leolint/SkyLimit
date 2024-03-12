function openMenu() {
    const openButton = document.getElementById('openMenu')
    const menu = document.querySelector('.header_wrapper-nav')

    var buttonStatus = false;

    openButton.addEventListener('click', function () {
        menu.classList.toggle('open')
        buttonStatus = !buttonStatus

        if (buttonStatus === true) {
            openButton.innerHTML = 'Закрити'
        } else {
            openButton.innerHTML = 'Меню'
        }
    })

}

openMenu()