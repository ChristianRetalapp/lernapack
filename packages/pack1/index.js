function retalappShadow(options) {
    let elements = document.querySelectorAll('.sombra')

    if(options.shadow_type === 'hard')
        options.shadow_type = '0px'
    else
        options.shadow_type = '15px'

    elements.forEach(element => {
        element.style.boxShadow = `10px 10px ${options.shadow_type} 5px #aaaaaa `

        if (options.padding) {
            element.style.padding = '1em'
        }
    })
}

module.exports.retalappShadow = retalappShadow
