$(document).ready(function () {
    new WOW( {animateClass: 'animate__animated'}).init();
    $("#accordion").accordion({
        heightStyle: "content"
    });

    $('.popUpImage').magnificPopup({
        type: 'image'
    });

    let indexForCheck = document.getElementById('inputIndex')

    let button = document.getElementById('btn-submit');
    button.onclick = (event) => {
        if (!document.getElementById('inputName').value) {
            alert('Заполните поле имени');
            return;
        }
        if (!document.getElementById('inputLastName').value) {
            alert('Заполните поле фамилии');
            return;
        }
        if (!document.getElementById('inputPhone').value) {
            alert('Заполните поле телефона');
            return;
        }
        if (!document.getElementById('inputCountry').value) {
            alert('Заполните поле страны');
            return;
        }
        if (!indexForCheck.value) {
            alert('Заполните поле индекса');
            return;
        }
        if (indexForCheck.value.length < 6 || indexForCheck.value.length > 6) {
            alert('Индекс должен состоять из 6 цифр');
            return;
        }
        if (!document.getElementById('inputAddress').value) {
            alert('Заполните поле адреса');
            return;
        }
        //event.target!!!
        document.getElementById('FormForOrder').hidden = true;
        document.getElementById('Order').textContent = 'Cпасибо за заказ!';
    }


})

