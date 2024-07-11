
function average(arr){
    sum = 0
    arr.forEach(element => {
        sum += element
    })
    return sum/arr.lenght
}
module.exports = average