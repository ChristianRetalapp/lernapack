function retalappColor(options) {

    let elements = document.querySelectorAll('.color')

    elements.forEach(element => {
        if(options.color === "rojo")
        element.style.backgroundColor = `#C8624C`
        else if(options.color === "verde")
        element.style.backgroundColor = `#4CC87B`
        else if(options.color === "amarillo")
        element.style.backgroundColor = `#ECE02E`
        else if(options.color === "azul")
        element.style.backgroundColor = `#2E7BEC`
    })
}

module.exports.retalappColor = retalappColor
