//1
console.log('Task 1')
const  numbers = [7,9,6,78,9,45,2,74,4,1,5,7,99,66,44,33,77,88];
      for(let i = 0; i <= numbers.length-1; i++) {
        console.log(numbers[i]);
      }

//2
console.log('Task 2')
const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
      for(let i = 0; i <= arr.length-1; i++) {
        if(arr[i] >= 2 & arr[i] <= 20) console.log(arr[i])
      }

//3
console.log('Task 3')
      let minNumber = numbers[0];
      for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < minNumber) {minNumber = numbers[i]}
      }
      console.log(minNumber);
      
     
//4
console.log('Task 4')
      numbers[0] = 100
      numbers[9] = 200
      numbers[17] = 300
      console.log(numbers[0], numbers[10], numbers)

//5
console.log('Task 5')
const animals = ['dog','elephant','tiger','monkey','crocodile','giraffe']
      let counter = animals[0].length
      let maxWord
      for(let item of animals) {
         if(item.length > counter) {
         counter = item.length;
         maxWord = item
         }
      }
      console.log(maxWord)

      



      




