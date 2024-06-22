const flatArray = [
    {
        id: '0',
        house: '7', 
        floor: '2',
        flatNumber: 1,
        rooms: '3',
        square: '82,3',
        price: '$1750',
        totalPrice: '$144 025',
        status: 'sold'
    },

    {
        id: '1',
        house: '7', 
        floor: '2',
        flatNumber: 2,
        rooms: '2',
        square: '67,7',
        price: '$1750',
        totalPrice: '$106 225',
        status: 'free'
    },

    {
        id: '2',
        house: '7', 
        floor: '2',
        flatNumber: 3,
        rooms: '2',
        square: '60,7',
        price: '$1750',
        totalPrice: '$106 225',
        status: 'booked'
    },

    {
        id: '3',
        house: '7', 
        floor: '2',
        flatNumber: 4,
        rooms: '3',
        square: '82,0',
        price: '$1750',
        totalPrice: '$143 500',
        status: 'free'
    },

    {
        id: '4',
        house: '7', 
        floor: '2',
        flatNumber: 5,
        rooms: '3',
        square: '82,0',
        price: '$1750',
        totalPrice: '$143 500',
        status: 'free'
    },

    {
        id: '5',
        house: '7', 
        floor: '2',
        flatNumber: 6,
        rooms: '3',
        square: '82,0',
        price: '$1750',
        totalPrice: '$143 500',
        status: 'free'
    },

    {
        id: '6',
        house: '7', 
        floor: '2',
        flatNumber: 7,
        rooms: '3',
        square: '82,0',
        price: '$1750',
        totalPrice: '$143 500',
        status: 'sold'
    },

    {
        id: '7',
        house: '7', 
        floor: '2',
        flatNumber: 8,
        rooms: '3',
        square: '82,0',
        price: '$1750',
        totalPrice: '$143 500',
        status: 'action'
    },

    {
        id: '8',
        house: '7', 
        floor: '2',
        flatNumber: 9,
        rooms: '3',
        square: '82,0',
        price: '$1750',
        totalPrice: '$143 500',
        status: 'booked'
    },
]



const installFloor = () => {
    const flats = document.querySelectorAll('.flat');
    const flatInfo = document.querySelector('.floor-options');

const removeActiveClass = ()=> flats.forEach(flat => {
    flat.classList.remove('active');
})
    
const initialValue = [{
    id: '1',
    house: '7', 
    floor: '2',
    flatNumber: 2,
    rooms: '2',
    square: '67,7',
    price: '$1750',
    totalPrice: '$106 225',
    status: 'free'
}]

const renderInformation = (array) => {
    const flatInformation = array.map(item => {
        return (`
        <div class="floor-options-item">
		<div>Номер будинку:</div>
		<div>${item.house}</div>
	</div>

	<div class="floor-options-item">
		<div>Поверх:</div>
		<div>${item.floor}</div>
	</div>

	<div class="floor-options-item">
		<div>Номер квартири:</div>
		<div>${item.flatNumber}</div>
	</div>

	<div class="floor-options-item">
		<div>К-сть кімнат:</div>
		<div>${item.rooms}</div>
	</div>

	<div class="floor-options-item">
		<div>Площа квартири:</div>
		<div>${item.square}</div>
	</div>

	<div class="floor-options-item">
		<div>Ціна за м.кв.</div>
		<div>${item.price}</div>
	</div>
	<div class="floor-options-item">
		<div>Ціна за квартиру:</div>
		<div>${item.totalPrice}</div>
	</div>

	<div class="floor-options-item">
		<div>Статус квартири:</div>
		<div>${item.status}</div>
	</div>
        
    <div class="floor-options-item">
		<a href="flat-item.html" class="flat-link">Дивитись квартиру</a>
	</div>
    `)
    })
    flatInfo.innerHTML = flatInformation

}

renderInformation(initialValue)

flats.forEach((flat, index, arr) => {
    flat.addEventListener('click', ()=>{
        removeActiveClass();
        flat.classList.add('active');

        const thisFlat = flat.getAttribute('data-flat-number');

        let flatNumber = flatArray.filter(item => item.flatNumber == (thisFlat))
        renderInformation(flatNumber)
    })

    flats.forEach(flat => {
        if (flat.classList.contains('booked')) {
            flat.querySelector('.flat-status-cell__tspan').innerHTML = 'Бронь'
        } else if (flat.classList.contains('action')) {
            flat.querySelector('.flat-status-cell__tspan').innerHTML = 'Акція'
        } else if (flat.classList.contains('already-sold')) {
            flat.querySelector('.flat-status-cell__tspan').innerHTML = 'Продано'
        } else {
            flat.querySelector('.flat-status-cell__tspan').innerHTML = 'Вільна'
        }
    })
})
}

document.querySelector('.floor-item-page') ? installFloor() : undefined;


const flats = document.querySelectorAll('.flat');