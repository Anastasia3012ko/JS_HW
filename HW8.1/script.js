//1

function multiplication(array) {
    let result = 1;
    for(i = 0; i < array.length; i++){
        result = result * array[i];
    }
    return result
}
const arr = [-3,10,2,8] 
console.log(`Произведение всех элементов массива: ${multiplication(arr)}`)

//2
function addition(array) {
    let res = 0;
    let i = 0;
    while(i < array.length){
        res += array[i];
        i++;
    }
    return res
}
console.log(`Сумма элементов массива: ${addition(arr)}`)








 