const planItem = document.querySelectorAll('.item-path')
const cellAdress = document.querySelector('#adress')
const cellFloors = document.querySelector('#floors')
const cellFreeFlats = document.querySelector('#freeFlats')
const cellSoldFlats = document.querySelector('#soldFlats')




const showInformation = (cell, dataAttr) => planItem.forEach(path => {
    path.addEventListener('mouseover', () => {
        cell.innerHTML = path.getAttribute(dataAttr)
    })

    const buildFreeFlats = path.getAttribute('data-free-flats')

    buildFreeFlats === "0" ? path.classList.add('sold') : null

    if (path.classList.contains('sold')) {
        const buildLink = path.closest('.item-link')
        buildLink.addEventListener('click', (event) => {
            event.preventDefault()
        })
    }
})


showInformation(cellAdress, 'data-adress')
showInformation(cellFloors, 'data-floors')
showInformation(cellFreeFlats, 'data-free-flats')
showInformation(cellSoldFlats, 'data-sold-flats')

if(document.querySelector('.build-item-page')) {
    showInformation(cellSoldFlats, 'data-sold-flats')
}