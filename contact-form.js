function sendContactForm(event) {
    event.preventDefault()

    document.getElementById('confirmation').classList.toggle('hidden')

    document.getElementById('name').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('dni').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    
    setTimeout(() => {
        document.getElementById('confirmation').classList.toggle('hidden')
    }, 3000);
}

function showPrice(event) {

    let { target: { value } } = event
    let priceContainer = document.getElementById('price')

    switch (value) {
        case 'Basico':
            priceContainer.innerHTML = '$500'
            break
        case 'Intermedio':
            priceContainer.innerHTML = '$1000'
            break
        case 'Premium':
            priceContainer.innerHTML = '$1500'
            break
    }
}