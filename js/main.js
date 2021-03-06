console.log('hello world');

let price = 800,
    totalPrice;

const elements = {
    scheme: document.querySelector('.scheme'),
    seat: document.querySelectorAll('.seat'),
    active: document.querySelectorAll('.active'),
    totalPrice: document.querySelector('.total-price'),
    currentDate: document.querySelectorAll('.session-date-item')
}

elements.seat.forEach((item)=> {
    item.addEventListener('click', (event) => {
        if(!event.target.classList.contains('booked')) {
            event.target.classList.toggle('active');
            console.log(elements.scheme.querySelectorAll('.active').length);
            let activeLength = elements.scheme.querySelectorAll('.active').length;
            elements.totalPrice.innerText = `${price * activeLength} ₽`;
        }
    })
    
});

elements.currentDate.forEach((item) => {
    item.addEventListener('click', (eventDate) => {
        elements.currentDate.forEach((e)=>{
            e.classList.remove('session-date-item-active')
        });
        console.log(item)
        if (item) {
            item.classList.toggle('session-date-item-active');

        }
    });
})