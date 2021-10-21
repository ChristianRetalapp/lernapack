function retalappContainer (options) {
    let elements = document.querySelectorAll('.contenedor')

    elements.forEach(element => {
        element.style.display = `flex`
        element.style.alignItems = `center`
        element.style.flexDirection = `column`
        element.style.justifyContent = 'center'
        element.style.padding = `5px`

    })
}

module.exports.retalappContainer  = retalappContainer 
