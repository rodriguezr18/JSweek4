
// we expect list to be an array
function average(list) {
    // sum is going to be our total value of what is in the array
    let sum = 0


    let arraySize = list.length
    list.forEach(function(number) {
        sum += number
    })

    return sum/ list.length

}

console.log(average([2, 45, 54, 4]));