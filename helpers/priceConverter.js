function converter(price) {
    let str = price.toString()
    let count = 1
    let result = ''
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i]
        if (count % 3 === 0) {
            result += '.'
        }
        count++
    }
    let newPrice = result.split('').reverse().join('')
    if (newPrice[0] === '.'){
        return `Rp ${newPrice.slice(1)}`
    } else {
        return `Rp ${newPrice}`
    }
}

module.exports = converter