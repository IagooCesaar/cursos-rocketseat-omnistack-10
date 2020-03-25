module.exports = function parseStringAsArray(arrayAsStrng){
    return arrayAsStrng.split(',').map(item => item.trim())
}